import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/ui/AppSidebar";
import FormHeader from "@/features/forms/FormHeader";
import FinalForm from "@/features/forms/FinalForm";

function Form() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-muted p-4 border-r fixed top-0 left-0 h-full">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </aside>

      <main className="flex-1 ml-60">
        <div className="p-4">
          <FormHeader />
          <FinalForm />
        </div>
      </main>
    </div>
  );
}

export default Form;
