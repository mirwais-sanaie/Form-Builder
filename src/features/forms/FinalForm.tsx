import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

function FinalForm() {
  return (
    <div>
      <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
        <CardContent className="p-12 text-center">
          <Plus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No fields added yet
          </h3>
          <p className="text-gray-500 mb-4">
            Start building your form by adding fields from the sidebar.
          </p>
          <p className="text-sm text-gray-400">
            Click on any field type in the left sidebar to add it to your form.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default FinalForm;
