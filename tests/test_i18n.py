"""
Automated Key Parity & Invariants Verification Test for Career Engine i18n dictionaries.

Verifies:
1. Parse valid JSON from i18n/en.js and i18n/de.js via Node.js subprocess.
2. 100% key path parity between English and German dictionaries and equal array lengths.
3. German invariants check: Enforce spaced technical compounds (REST APIs, CI/CD Pipelines,
   MCP Tools, KI Agenten, Fullstack Entwickler, Cloud Architekturen, etc.).
4. Zero emojis invariant across all string values in English and German dictionaries.
5. Metadata check: meta.code is "en" in en.js and "de" in de.js.
"""

import json
import os
import re
import subprocess
import unittest
from typing import Any, Dict, List, Set, Tuple


FORBIDDEN_GERMAN_COMPOUNDS: List[Tuple[str, str]] = [
    (r"\bREST-APIs?\b", "REST APIs"),
    (r"CI/CD-Pipelines?", "CI/CD Pipelines"),
    (r"\bMCP-Tools?\b", "MCP Tools"),
    (r"\bMCP-Servers?\b", "MCP Servers"),
    (r"\bKI-Agent(en)?\b", "KI Agenten"),
    (r"\bFullstack-Entwickler(n|s)?\b", "Fullstack Entwickler"),
    (r"\bFull-Stack\b", "Fullstack"),
    (r"\bCloud-Architektur(en)?\b", "Cloud Architekturen"),
    (r"\bFigma-Designs?\b", "Figma Design"),
    (r"\bn8n-Workflows?\b", "n8n Workflows"),
]

EMOJI_PATTERN = re.compile(
    r"[\U00010000-\U0010ffff\u2600-\u27bf\u2b50-\u2b55\u2300-\u23ff]",
    flags=re.UNICODE,
)


def get_repo_root() -> str:
    """Return the absolute path to the repository root directory."""
    return os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def load_i18n_module(file_path: str) -> Dict[str, Any]:
    """Parse a JavaScript UMD i18n dictionary file using Node.js subprocess."""
    if not os.path.isfile(file_path):
        raise FileNotFoundError(f"i18n module file not found: {file_path}")

    node_eval_code = "console.log(JSON.stringify(require(process.argv[1])))"
    try:
        result = subprocess.run(
            ["node", "-e", node_eval_code, file_path],
            capture_output=True,
            text=True,
            encoding="utf-8",
            check=True,
        )
    except subprocess.CalledProcessError as err:
        raise RuntimeError(
            f"Failed to parse i18n file via Node.js: {file_path}\n"
            f"Exit code: {err.returncode}\n"
            f"Stderr: {err.stderr}"
        ) from err
    except FileNotFoundError as err:
        raise RuntimeError("Node.js runtime is required to parse i18n dictionary modules.") from err

    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError as err:
        raise RuntimeError(
            f"Invalid JSON returned from Node.js for {file_path}: {err}\n"
            f"Output: {result.stdout[:500]}"
        ) from err


def extract_key_paths(obj: Any, current_path: str = "") -> Set[str]:
    """Recursively extract all key paths from nested dictionaries and lists."""
    paths: Set[str] = set()

    if isinstance(obj, dict):
        for key, value in obj.items():
            path = f"{current_path}.{key}" if current_path else key
            paths.add(path)
            paths.update(extract_key_paths(value, path))
    elif isinstance(obj, list):
        for idx, item in enumerate(obj):
            path = f"{current_path}[{idx}]"
            paths.add(path)
            if isinstance(item, (dict, list)):
                paths.update(extract_key_paths(item, path))

    return paths


def extract_array_lengths(obj: Any, current_path: str = "") -> Dict[str, int]:
    """Recursively extract lengths of all array collections in a data tree."""
    arrays: Dict[str, int] = {}

    if isinstance(obj, dict):
        for key, value in obj.items():
            path = f"{current_path}.{key}" if current_path else key
            if isinstance(value, list):
                arrays[path] = len(value)
                for idx, item in enumerate(value):
                    if isinstance(item, (dict, list)):
                        arrays.update(extract_array_lengths(item, f"{path}[{idx}]"))
            elif isinstance(value, dict):
                arrays.update(extract_array_lengths(value, path))

    return arrays


def collect_string_values(obj: Any, current_path: str = "") -> List[Tuple[str, str]]:
    """Recursively collect all string values along with their key paths."""
    strings: List[Tuple[str, str]] = []

    if isinstance(obj, str):
        strings.append((current_path, obj))
    elif isinstance(obj, dict):
        for key, value in obj.items():
            path = f"{current_path}.{key}" if current_path else key
            strings.extend(collect_string_values(value, path))
    elif isinstance(obj, list):
        for idx, item in enumerate(obj):
            path = f"{current_path}[{idx}]"
            strings.extend(collect_string_values(item, path))

    return strings


class TestI18n(unittest.TestCase):
    """Test suite for Career Engine i18n key parity and linguistic invariants."""

    en_data: Dict[str, Any]
    de_data: Dict[str, Any]
    en_path: str
    de_path: str

    @classmethod
    def setUpClass(cls):
        repo_root = get_repo_root()
        cls.en_path = os.path.join(repo_root, "i18n", "en.js")
        cls.de_path = os.path.join(repo_root, "i18n", "de.js")

        cls.en_data = load_i18n_module(cls.en_path)
        cls.de_data = load_i18n_module(cls.de_path)

    def test_01_parse_i18n_files(self):
        """Verify that i18n/en.js and i18n/de.js exist and parse into non-empty objects."""
        self.assertTrue(os.path.isfile(self.en_path), f"Missing {self.en_path}")
        self.assertTrue(os.path.isfile(self.de_path), f"Missing {self.de_path}")
        self.assertIsInstance(self.en_data, dict, "en.js must export an object dictionary")
        self.assertIsInstance(self.de_data, dict, "de.js must export an object dictionary")
        self.assertGreater(len(self.en_data), 0, "en.js dictionary must not be empty")
        self.assertGreater(len(self.de_data), 0, "de.js dictionary must not be empty")

    def test_02_100_percent_key_parity(self):
        """Verify 100% key parity between English and German translation dictionaries."""
        en_paths = extract_key_paths(self.en_data)
        de_paths = extract_key_paths(self.de_data)

        missing_in_de = en_paths - de_paths
        missing_in_en = de_paths - en_paths

        self.assertFalse(
            missing_in_de,
            f"Key path(s) present in en.js but missing in de.js ({len(missing_in_de)}):\n"
            + "\n".join(f"  - {path}" for path in sorted(missing_in_de)),
        )
        self.assertFalse(
            missing_in_en,
            f"Key path(s) present in de.js but missing in en.js ({len(missing_in_en)}):\n"
            + "\n".join(f"  - {path}" for path in sorted(missing_in_en)),
        )
        self.assertEqual(
            len(en_paths),
            len(de_paths),
            f"Total path count mismatch: EN has {len(en_paths)}, DE has {len(de_paths)}",
        )

    def test_03_array_lengths_parity(self):
        """Verify that all array collections match in length between en.js and de.js."""
        en_arrays = extract_array_lengths(self.en_data)
        de_arrays = extract_array_lengths(self.de_data)

        self.assertEqual(
            en_arrays,
            de_arrays,
            f"Array structure or length mismatch between en.js and de.js:\n"
            f"EN arrays: {en_arrays}\n"
            f"DE arrays: {de_arrays}",
        )

        # Explicitly verify required core collections exist and have non-zero elements
        required_collections = [
            ("prompts.promptCards", 7),
            ("engine.commandCards", 4),
            ("skills.skillCards", 10),
            ("faq.items", 4),
            ("download.bullets", 2),
        ]
        for collection_path, min_length in required_collections:
            self.assertIn(
                collection_path,
                en_arrays,
                f"Required array collection '{collection_path}' missing in en.js",
            )
            self.assertIn(
                collection_path,
                de_arrays,
                f"Required array collection '{collection_path}' missing in de.js",
            )
            self.assertGreaterEqual(
                en_arrays[collection_path],
                min_length,
                f"Array '{collection_path}' in en.js has {en_arrays[collection_path]} items, expected >= {min_length}",
            )
            self.assertEqual(
                en_arrays[collection_path],
                de_arrays[collection_path],
                f"Array length mismatch for '{collection_path}': EN={en_arrays[collection_path]}, DE={de_arrays[collection_path]}",
            )

    def test_04_german_invariants_check(self):
        """Verify that de.js contains zero forbidden hyphenated compound technical terms."""
        de_strings = collect_string_values(self.de_data)
        violations: List[str] = []

        for pattern_str, expected_format in FORBIDDEN_GERMAN_COMPOUNDS:
            pattern = re.compile(pattern_str, re.IGNORECASE)
            for path, text in de_strings:
                matches = pattern.findall(text)
                if matches:
                    violations.append(
                        f"Path '{path}': found forbidden '{matches}' (expected spaced format '{expected_format}') in \"{text}\""
                    )

        self.assertFalse(
            violations,
            f"Detected {len(violations)} German invariant violation(s) in i18n/de.js:\n"
            + "\n".join(f"  - {v}" for v in violations),
        )

    def test_05_zero_emojis_check(self):
        """Verify that all strings in both en.js and de.js contain zero emojis."""
        en_strings = collect_string_values(self.en_data)
        de_strings = collect_string_values(self.de_data)

        en_violations: List[str] = []
        for path, text in en_strings:
            matches = EMOJI_PATTERN.findall(text)
            if matches:
                en_violations.append(f"en.js [{path}]: found {matches} in \"{text}\"")

        de_violations: List[str] = []
        for path, text in de_strings:
            matches = EMOJI_PATTERN.findall(text)
            if matches:
                de_violations.append(f"de.js [{path}]: found {matches} in \"{text}\"")

        self.assertFalse(
            en_violations,
            f"Found prohibited emojis in i18n/en.js ({len(en_violations)}):\n"
            + "\n".join(f"  - {v}" for v in en_violations),
        )
        self.assertFalse(
            de_violations,
            f"Found prohibited emojis in i18n/de.js ({len(de_violations)}):\n"
            + "\n".join(f"  - {v}" for v in de_violations),
        )

    def test_06_metadata_check(self):
        """Verify that meta.code is 'en' in en.js and 'de' in de.js with valid direction."""
        en_meta = self.en_data.get("meta", {})
        de_meta = self.de_data.get("meta", {})

        self.assertEqual(
            en_meta.get("code"),
            "en",
            f"Expected meta.code to be 'en' in en.js, got '{en_meta.get('code')}'",
        )
        self.assertEqual(
            de_meta.get("code"),
            "de",
            f"Expected meta.code to be 'de' in de.js, got '{de_meta.get('code')}'",
        )

        self.assertEqual(en_meta.get("dir"), "ltr", "Expected en.js meta.dir to be 'ltr'")
        self.assertEqual(de_meta.get("dir"), "ltr", "Expected de.js meta.dir to be 'ltr'")

        for required_key in ["label", "pageTitle", "description", "ogTitle", "ogDescription"]:
            self.assertIn(
                required_key,
                en_meta,
                f"Missing meta key '{required_key}' in en.js",
            )
            self.assertIn(
                required_key,
                de_meta,
                f"Missing meta key '{required_key}' in de.js",
            )
            self.assertTrue(
                en_meta[required_key],
                f"meta.{required_key} in en.js must not be empty",
            )
            self.assertTrue(
                de_meta[required_key],
                f"meta.{required_key} in de.js must not be empty",
            )


if __name__ == "__main__":
    unittest.main()
