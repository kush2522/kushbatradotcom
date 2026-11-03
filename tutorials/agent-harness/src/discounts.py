"""Discount calculation used by the agent-harness teaching demo."""


def total_after_discount(subtotal: float, discount_percent: float) -> float:
    """Return the amount due after applying a percentage discount."""
    # Deliberately incorrect starter implementation for the walkthrough.
    return round(subtotal + (subtotal * discount_percent / 100), 2)
