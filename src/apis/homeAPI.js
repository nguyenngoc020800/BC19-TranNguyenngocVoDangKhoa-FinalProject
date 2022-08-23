import axiosClient from "./axiosClient";

export const getLocationList = () => {
  return axiosClient.get("locations");
};
export const getRoomByID = (id) => {
  return axiosClient.get("rooms", {
    params: {
      locationId: id,
    },
  });
};
