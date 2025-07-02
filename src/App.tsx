import { Routes, Route } from "react-router-dom";
import AppLayout from "./mainUi/AppLayout";
import Home from "./mainUi/Home";
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
