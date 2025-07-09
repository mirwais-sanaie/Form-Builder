import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ItemTypes, type FieldType } from "../../types/dragAndDropTypes";
import { useDrop } from "react-dnd";
import FormFieldPreview from "./FormFieldPreview";

function FinalForm() {
  const [fields, setFields] = useState<{ id: string; type: FieldType }[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.FIELD,
    drop: (item: { type: FieldType }) => {
      setFields((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: item.type,
        },
      ]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const moveField = (dragIndex: number, hoverIndex: number) => {
    setFields((prev) => {
      const newFields = [...prev];
      const [removed] = newFields.splice(dragIndex, 1);
      newFields.splice(hoverIndex, 0, removed);
      return newFields;
    });
  };

  const removeField = (id: string) => {
    setFields((prev) => prev.filter((field) => field.id !== id));
  };

  return (
    <div
      ref={drop}
      className={`min-h-[400px] w-1/2 mx-auto ${isOver ? "bg-blue-50" : ""}`}
    >
      {fields.length === 0 ? (
        <Card className="border-2 border-dashed border-gray-300 bg-gray-50 h-full">
          <CardContent className="p-12 text-center">
            <Plus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No fields added yet
            </h3>
            <p className="text-gray-500 mb-4">
              Drag fields here to build your form
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {fields.map((field, index) => (
            <FormFieldPreview
              key={field.id}
              id={field.id}
              type={field.type}
              index={index}
              moveField={moveField}
              onRemove={() => removeField(field.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FinalForm;
