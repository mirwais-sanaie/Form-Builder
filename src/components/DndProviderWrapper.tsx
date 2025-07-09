import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function DndProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
}
