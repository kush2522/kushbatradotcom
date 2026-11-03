"""Fixed acceptance tests. The demo agent has no tool that can edit this file."""
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))

from discounts import total_after_discount  # noqa: E402


class DiscountTests(unittest.TestCase):
    def test_ten_percent_discount(self):
        self.assertEqual(total_after_discount(100, 10), 90)

    def test_zero_discount(self):
        self.assertEqual(total_after_discount(75, 0), 75)

    def test_full_discount(self):
        self.assertEqual(total_after_discount(80, 100), 0)

    def test_rounds_to_two_decimal_places(self):
        self.assertEqual(total_after_discount(19.99, 12.5), 17.49)

    def test_rejects_negative_subtotal(self):
        with self.assertRaises(ValueError):
            total_after_discount(-10, 10)

    def test_rejects_invalid_discount(self):
        with self.assertRaises(ValueError):
            total_after_discount(100, 101)


if __name__ == "__main__":
    suite = unittest.defaultTestLoader.loadTestsFromTestCase(DiscountTests)
    result = unittest.TextTestRunner(verbosity=2).run(suite)
    raise SystemExit(0 if result.wasSuccessful() else 1)
