export function getLocalized(value, lang) {
  if (value == null) return "";
  if (typeof value !== "object") return value;
  return value[lang] ?? value.en ?? "";
}
