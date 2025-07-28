// utils/sanitizeData.js

const nameLikeFields = [
  "firstName",
  "middleName",
  "lastName",
  "nickname",
  "extensionName",
  "birthplace",
  "nationality",
  "civilStatus",
  "bloodType",
  "name",
  "fname",
  "mname",
  "lname",
  "relationship",
  "department",
  "division",
  "office",
  "team",
  "jobTitle",
  "supervisor",
];

function capitalizeWords(str) {
  return str
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function isEmptyObject(obj) {
  return (
    typeof obj === "object" &&
    obj !== null &&
    !Array.isArray(obj) &&
    Object.values(obj).every(
      (val) => val === "" || val === null || val === undefined
    )
  );
}

export function sanitizeData(data, currentKey = "") {
  if (Array.isArray(data)) {
    return data
      .map((item) => sanitizeData(item))
      .filter((item) => item !== undefined && item !== null && !isEmptyObject(item));
  }

  if (typeof data === "object" && data !== null) {
    const sanitized = {};

    for (const key in data) {
      const value = data[key];

      if (value === undefined) continue;

      // Flatten { code, name } → name
      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "name" in value &&
        Object.keys(value).length === 2
      ) {
        sanitized[key] = value.name ? capitalizeWords(value.name) : "";
        continue;
      }

      const cleanedValue = sanitizeData(value, key);

      if (typeof cleanedValue === "object" && isEmptyObject(cleanedValue)) continue;

      sanitized[key] = cleanedValue;
    }

    return Object.keys(sanitized).length > 0 ? sanitized : undefined;
  }

  if (typeof data === "string") {
    const trimmed = data.trim();
    if (trimmed === "") return undefined;

    return nameLikeFields.includes(currentKey)
      ? capitalizeWords(trimmed)
      : trimmed;
  }

  return data;
}
