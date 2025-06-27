import { Routes, Route } from "react-router-dom";
import AppLayout from "./mainUi/AppLayout";
import Home from "./mainUi/Home";

function App() {
  return (
    // <div>
    //   <Header/>
    // </div>

    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
