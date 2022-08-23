import React from "react";
import Hotel from "./Hotel";
import { useSelector } from "react-redux";

const HotelShowing = () => {
  const { room } = useSelector((state) => state.location);

  if (room && room.length) {
    return (
      <div className="row hotel-list">
        {room?.map((roomItem, index) => {
          if (roomItem.locationId) {
            return (
              <Hotel
                key={index}
                img={roomItem.image}
                name={roomItem.name}
                location={`${roomItem.locationId?.name}, ${roomItem?.locationId?.province}`}
                price={roomItem.price}
                roomID={roomItem._id}
              />
            );
          }
          return (
            <Hotel
              key={index}
              img={roomItem.image}
              name={roomItem.name}
              location="chưa xác định"
              price={roomItem.price}
              roomID={roomItem._id}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="row hotel-list">
      <h3>không có phòng khu vực này</h3>
    </div>
  );
};

export default HotelShowing;
