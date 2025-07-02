import { create } from "zustand";
import { nanoid } from "nanoid";
import {
  FIELD_TYPES,
  type FieldType,
  type FormField,
  type FormData,
  type FormStore,
  type Option,
  type Validation,
} from "../types";

// Default field configurations
const defaultFieldConfigs: Record<FieldType, Partial<FormField>> = {
  [FIELD_TYPES.TEXT]: {
    label: "Text Input",
    placeholder: "Enter text...",
    required: false,
    validation: {},
  },
  [FIELD_TYPES.EMAIL]: {
    label: "Email Input",
    placeholder: "Enter email...",
    required: false,
    validation: {},
  },
  [FIELD_TYPES.NUMBER]: {
    label: "Number Input",
    placeholder: "Enter number...",
    required: false,
    validation: { min: null, max: null },
  },
  [FIELD_TYPES.TEXTAREA]: {
    label: "Text Area",
    placeholder: "Enter text...",
    required: false,
    rows: 3,
    validation: {},
  },
  [FIELD_TYPES.SELECT]: {
    label: "Select Dropdown",
    placeholder: "Choose an option...",
    required: false,
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
    ],
  },
  [FIELD_TYPES.RADIO]: {
    label: "Radio Buttons",
    required: false,
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
    ],
  },
  [FIELD_TYPES.CHECKBOX]: {
    label: "Checkbox",
    required: false,
    text: "Check this box",
  },
  [FIELD_TYPES.DATE]: {
    label: "Date Input",
    required: false,
    validation: {},
  },
  [FIELD_TYPES.FILE]: {
    label: "File Upload",
    required: false,
    accept: "*",
    multiple: false,
  },
};

export const useFormStore = create<FormStore>((set, get) => ({
  // Form state
  formTitle: "Untitled Form",
  formDescription: "",
  fields: [],
  selectedFieldId: null,
  isDragging: false,

  // Form actions
  setFormTitle: (title: string) => set({ formTitle: title }),

  setFormDescription: (description: string) =>
    set({ formDescription: description }),

  // Field actions
  addField: (type: FieldType, position: number | null = null) => {
    const config = defaultFieldConfigs[type];
    const newField: FormField = {
      id: nanoid(),
      type,
      order: position !== null ? position : get().fields.length,
      ...config,
    } as FormField;

    set((state) => {
      const newFields = [...state.fields];
      if (position !== null) {
        newFields.splice(position, 0, newField);
        // Update order for subsequent fields
        newFields.forEach((field, index) => {
          field.order = index;
        });
      } else {
        newFields.push(newField);
      }
      return { fields: newFields, selectedFieldId: newField.id };
    });
  },

  removeField: (fieldId: string) => {
    set((state) => ({
      fields: state.fields
        .filter((field) => field.id !== fieldId)
        .map((field, index) => ({
          ...field,
          order: index,
        })),
      selectedFieldId:
        state.selectedFieldId === fieldId ? null : state.selectedFieldId,
    }));
  },

  updateField: (fieldId: string, updates: Partial<FormField>) => {
    set((state) => ({
      fields: state.fields.map((field) =>
        field.id === fieldId ? { ...field, ...updates } : field
      ),
    }));
  },

  duplicateField: (fieldId: string) => {
    const field = get().fields.find((f) => f.id === fieldId);
    if (field) {
      const duplicatedField: FormField = {
        ...field,
        id: nanoid(),
        label: field.label + " (Copy)",
        order: field.order + 1,
      };

      set((state) => {
        const newFields = [...state.fields];
        newFields.splice(field.order + 1, 0, duplicatedField);
        // Update order for subsequent fields
        newFields.forEach((field, index) => {
          field.order = index;
        });
        return { fields: newFields, selectedFieldId: duplicatedField.id };
      });
    }
  },

  moveField: (fromIndex: number, toIndex: number) => {
    set((state) => {
      const newFields = [...state.fields];
      const [movedField] = newFields.splice(fromIndex, 1);
      newFields.splice(toIndex, 0, movedField);

      // Update order for all fields
      newFields.forEach((field, index) => {
        field.order = index;
      });

      return { fields: newFields };
    });
  },

  // Selection actions
  selectField: (fieldId: string) => set({ selectedFieldId: fieldId }),

  clearSelection: () => set({ selectedFieldId: null }),

  // Drag and drop actions
  setDragging: (isDragging: boolean) => set({ isDragging }),

  // Form data and validation
  getFormData: (): FormData => {
    const { formTitle, formDescription, fields } = get();
    return {
      title: formTitle,
      description: formDescription,
      fields: fields.sort((a, b) => a.order - b.order),
    };
  },

  // Reset form
  resetForm: () =>
    set({
      formTitle: "Untitled Form",
      formDescription: "",
      fields: [],
      selectedFieldId: null,
      isDragging: false,
    }),

  // Load form data
  loadForm: (formData: FormData) =>
    set({
      formTitle: formData.title || "Untitled Form",
      formDescription: formData.description || "",
      fields: formData.fields || [],
      selectedFieldId: null,
    }),
}));
