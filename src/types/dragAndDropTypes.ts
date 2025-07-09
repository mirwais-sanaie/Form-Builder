export const FIELD_TYPES = {
  TEXT: "text",
  EMAIL: "email",
  NUMBER: "number",
  TEXTAREA: "textarea",
  SELECT: "select",
  RADIO: "radio",
  CHECKBOX: "checkbox",
  DATE: "date",
  FILE: "file",
} as const;

export type FieldType = keyof typeof FIELD_TYPES;

// For drag and drop types
export const ItemTypes = {
  FIELD: "field",
} as const;
