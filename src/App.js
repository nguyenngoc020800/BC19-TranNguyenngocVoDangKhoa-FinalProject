import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./modules/Home/page/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
