import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { type FieldType } from "@/types";
import { GripVertical, Trash2 } from "lucide-react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

interface FormFieldPreviewProps {
  id: string;
  type: FieldType;
  index: number;
  moveField: (dragIndex: number, hoverIndex: number) => void;
  onRemove: () => void;
}

function FormFieldPreview({
  id,
  type,
  index,
  moveField,
  onRemove,
}: FormFieldPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "EXISTING_FIELD",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "EXISTING_FIELD",
    hover: (item: { id: string; index: number }) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      moveField(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  const renderFieldInput = () => {
    switch (type) {
      case "text":
        return <Input placeholder="Enter text..." />;
      case "email":
        return <Input type="email" placeholder="Enter email..." />;
      case "number":
        return <Input type="number" placeholder="Enter number..." />;
      case "textarea":
        return (
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Enter text..."
            rows={3}
          />
        );
      default:
        return <Input placeholder={`${type} field`} />;
    }
  };

  return (
    <div
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="relative group"
    >
      <Card>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <button
              type="button"
              className="cursor-move p-1 -ml-2"
              aria-label="Drag to reorder"
            >
              <GripVertical className="w-4 h-4 text-gray-400" />
            </button>

            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {type.charAt(0).toUpperCase() + type.slice(1)} Field
              </label>
              {renderFieldInput()}
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={onRemove}
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default FormFieldPreview;
