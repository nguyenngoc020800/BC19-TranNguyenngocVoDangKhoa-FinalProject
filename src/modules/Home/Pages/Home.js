import React from "react";
// import { useSelector } from "react-redux";
// import SearchBox from "../../../components/SearchBox";
import Filter from "../components/Filter";
import HotelShowing from "../components/HotelShowing";
import Nav from "../components/Nav";
const Home = () => {
  return (
    <div>
      <Nav />
      <Filter />
      <HotelShowing />
    </div>
  );
};

export default Home;
