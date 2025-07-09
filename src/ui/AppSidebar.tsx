/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDrag } from "react-dnd";
import { ItemTypes } from "../types/dragAndDropTypes";
import {
  Type,
  Mail,
  Hash,
  FileText,
  ChevronDown,
  Circle,
  CheckSquare,
  Calendar,
  Upload,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "../components/ui/sidebar";

import { FIELD_TYPES, type FieldType } from "./../types";
import { Card, CardContent } from "@/components/ui/card";

interface FieldTypeConfig {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
}

// Menu items.
const fieldTypeConfig: Record<FieldType, FieldTypeConfig> = {
  [FIELD_TYPES.TEXT]: {
    icon: Type,
    label: "Text Input",
    description: "Single line text input",
  },
  [FIELD_TYPES.EMAIL]: {
    icon: Mail,
    label: "Email",
    description: "Email address input",
  },
  [FIELD_TYPES.NUMBER]: {
    icon: Hash,
    label: "Number",
    description: "Numeric input field",
  },
  [FIELD_TYPES.TEXTAREA]: {
    icon: FileText,
    label: "Text Area",
    description: "Multi-line text input",
  },
  [FIELD_TYPES.SELECT]: {
    icon: ChevronDown,
    label: "Select Dropdown",
    description: "Dropdown selection",
  },
  [FIELD_TYPES.RADIO]: {
    icon: Circle,
    label: "Radio Buttons",
    description: "Single choice selection",
  },
  [FIELD_TYPES.CHECKBOX]: {
    icon: CheckSquare,
    label: "Checkbox",
    description: "Boolean checkbox input",
  },
  [FIELD_TYPES.DATE]: {
    icon: Calendar,
    label: "Date",
    description: "Date picker input",
  },
  [FIELD_TYPES.FILE]: {
    icon: Upload,
    label: "File Upload",
    description: "File upload input",
  },
};

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="pt-10">
              <div className="flex-1 overflow-y-auto p-4 py-3 space-y-2">
                {Object.entries(fieldTypeConfig).map(([type, config]) => {
                  const IconComponent = config.icon;

                  return (
                    <DraggableFieldType
                      key={type}
                      type={type as FieldType}
                      config={config}
                    />
                  );
                })}
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function DraggableFieldType({
  type,
  config,
}: {
  type: FieldType;
  config: FieldTypeConfig;
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.FIELD,
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const IconComponent = config.icon;

  return (
    <div
      ref={(node) => drag(node as HTMLDivElement)}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 border-2 hover:border-blue-300">
        <CardContent className="p-3">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <IconComponent className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {config.label}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {config.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
