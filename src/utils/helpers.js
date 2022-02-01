export function cutStringIfNeeded(text, maxLength) {
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + "..."
    : text;
}
