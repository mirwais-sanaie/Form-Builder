// Form field types
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

export type FieldType = (typeof FIELD_TYPES)[keyof typeof FIELD_TYPES];

// Option interface for select and radio fields
export interface Option {
  label: string;
  value: string;
}

// Validation interface
export interface Validation {
  min?: number | null;
  max?: number | null;
}

// Base field interface
export interface BaseField {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
  order: number;
}

// Text field interface
export interface TextField extends BaseField {
  type: typeof FIELD_TYPES.TEXT;
  placeholder: string;
  validation: Validation;
}

// Email field interface
export interface EmailField extends BaseField {
  type: typeof FIELD_TYPES.EMAIL;
  placeholder: string;
  validation: Validation;
}

// Number field interface
export interface NumberField extends BaseField {
  type: typeof FIELD_TYPES.NUMBER;
  placeholder: string;
  validation: Validation;
}

// Textarea field interface
export interface TextareaField extends BaseField {
  type: typeof FIELD_TYPES.TEXTAREA;
  placeholder: string;
  rows: number;
  validation: Validation;
}

// Select field interface
export interface SelectField extends BaseField {
  type: typeof FIELD_TYPES.SELECT;
  placeholder: string;
  options: Option[];
}

// Radio field interface
export interface RadioField extends BaseField {
  type: typeof FIELD_TYPES.RADIO;
  options: Option[];
}

// Checkbox field interface
export interface CheckboxField extends BaseField {
  type: typeof FIELD_TYPES.CHECKBOX;
  text: string;
}

// Date field interface
export interface DateField extends BaseField {
  type: typeof FIELD_TYPES.DATE;
  validation: Validation;
}

// File field interface
export interface FileField extends BaseField {
  type: typeof FIELD_TYPES.FILE;
  accept: string;
  multiple: boolean;
}

// Union type for all field types
export type FormField =
  | TextField
  | EmailField
  | NumberField
  | TextareaField
  | SelectField
  | RadioField
  | CheckboxField
  | DateField
  | FileField;

// Form data interface
export interface FormData {
  title: string;
  description: string;
  fields: FormField[];
}

// Form store state interface
export interface FormStoreState {
  formTitle: string;
  formDescription: string;
  fields: FormField[];
  selectedFieldId: string | null;
  isDragging: boolean;
}

// Form store actions interface
export interface FormStoreActions {
  setFormTitle: (title: string) => void;
  setFormDescription: (description: string) => void;
  addField: (type: FieldType, position?: number | null) => void;
  removeField: (fieldId: string) => void;
  updateField: (fieldId: string, updates: Partial<FormField>) => void;
  duplicateField: (fieldId: string) => void;
  moveField: (fromIndex: number, toIndex: number) => void;
  selectField: (fieldId: string) => void;
  clearSelection: () => void;
  setDragging: (isDragging: boolean) => void;
  getFormData: () => FormData;
  resetForm: () => void;
  loadForm: (formData: FormData) => void;
}

// Complete form store interface
export interface FormStore extends FormStoreState, FormStoreActions {}

// Component props interfaces
export interface FormFieldProps {
  field: FormField;
}

export interface FieldSidebarProps {}

export interface FormCanvasProps {}

export interface FormHeaderProps {}

export interface PropertiesPanelProps {}

export interface FormBuilderProps {}
