import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Form from "./pages/Form";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Route>
    </Routes>
  );
}

export default App;
