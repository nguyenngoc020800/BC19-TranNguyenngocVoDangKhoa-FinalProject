import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./modules/Home/Pages/Home";
import RoomList from "./modules/RoomControl/pages/RoomList";
import RoomDetail from "./modules/RoomControl/pages/RoomDetail";
import MainLayOut from "./layout/MainLayOut";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Home />} />
          <Route path="/roomList/:cityname" element={<RoomList />} />
          <Route path="/roomDetails/:roomId" element={<RoomDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
