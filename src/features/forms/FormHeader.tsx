/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useFormStore } from "../store/formStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Edit3, Save, Eye, Download, Upload } from "lucide-react";
import { useState } from "react";
// import type { FormHeaderProps, FormData } from "../types";

function FormHeader() {
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);
  const [isEditingDescription, setIsEditingDescription] =
    useState<boolean>(false);
  return (
    <Card className="mb-4 mt-0 shadow-sm">
      <CardContent className="px-6 py-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            {/* Form Title */}
            <div className="mb-2">
              {isEditingTitle ? (
                <div className="flex items-center gap-2">
                  <Input
                    className="text-2xl font-bold"
                    placeholder="Enter form title..."
                    autoFocus
                  />
                  <Button size="sm">
                    <Save className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2 group">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Title of Form
                  </h1>
                  <Button
                    onClick={() =>
                      setIsEditingTitle((isEditingTitle) => !isEditingTitle)
                    }
                    variant="ghost"
                    size="sm"
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

            <div>
              {isEditingDescription ? (
                <div className="flex items-start gap-2">
                  <Textarea
                    placeholder="Enter form description..."
                    className="resize-none"
                    rows={2}
                    autoFocus
                  />
                  <Button size="sm">
                    <Save className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-start gap-2 group">
                  <p className="text-gray-600 min-h-[20px]">
                    "Click to add a description..."
                  </p>
                  <Button
                    onClick={() =>
                      setIsEditingDescription(
                        (isEditingDescription) => !isEditingDescription
                      )
                    }
                    variant="ghost"
                    size="sm"
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 ml-4">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>

            <label>
              <Button variant="outline" asChild>
                <span>
                  <Upload className="w-4 h-4 mr-2" />
                  Import
                </span>
              </Button>
              <input type="file" accept=".json" className="hidden" />
            </label>

            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>

            <Button variant="destructive">Clear All</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FormHeader;
