import React from "react";
import { useParams } from "react-router-dom";

const RoomDetail = () => {
  const { roomId } = useParams("");
  return <div>{roomId}</div>;
};

export default RoomDetail;
