import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { IconContext } from "react-icons/lib";
import HotelSlide from "./HotelSlide";
const Hotel = ({ img, location, price, name, roomID }) => {
  const navigate = useNavigate();
  return (
    <div className="px-2 col-md-3">
      <div className="card hotel border-1 mb-2 p-2">
        <div className="hotel-header">
          <HotelSlide image={img} />

          <IconContext.Provider value={{ className: "arrow" }}>
            <BsArrowLeftShort />
          </IconContext.Provider>

          <IconContext.Provider value={{ className: "arrow" }}>
            <BsArrowRightShort />
          </IconContext.Provider>
        </div>
        <div className="card-body hotel-body">
          <div className="hotel-title row">
            <span className="hotel-name col-9 font-weight-bold">{name}</span>
            <span className="hotel-status col-3 font-weight-bold text-right">
              <BsStarFill className="star-icon" /> New
            </span>
          </div>
          <div className="hotel-detail">
            <p className="hotel-adress m-0">1000km</p>
            <p className="hotel-adress m-0">{location}</p>
            <p className="hotel-adress m-0">$: {price} VNĐ</p>
            <button
              onClick={() => {
                navigate(`/roomDetails/${roomID}`);
              }}
              className="btn btn-outline-danger"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
