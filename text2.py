"""This module provides a function to count word occurrences in a text."""

def word_count(input_text):
    """Counts the occurrences of each word in a given text."""
    words = input_text.lower().split()
    word_freq = {}

    print(words)
    for w in words:
        w = w.strip(".,!?()[]{}\"'")  # Remove punctuation
        word_freq[w] = word_freq.get(w, 0) + 1

    return word_freq

# Example usage
TEXT = "Python is great! Python is easy to learn. Python is powerful."
result = word_count(TEXT)

for word, count in result.items():
    print(f"{word}: {count}")
