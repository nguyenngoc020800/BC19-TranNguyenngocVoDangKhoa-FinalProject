import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./modules/Home/Pages/Home";
import RoomDetail from "./modules/RoomControl/pages/RoomDetail";
import MainLayOut from "./layout/MainLayOut";
import AuthenLayout from "./layout/AuthenLayout";
import Login from "./modules/Authentication/pages/Login";
import Register from "./modules/Authentication/pages/Register";
function App() {
  return (
    <div className="container-fluid w1k2px">
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Home />} />
          <Route path="/roomDetails/:roomId" element={<RoomDetail />} />
        </Route>
        <Route path="/auth" element={<AuthenLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
