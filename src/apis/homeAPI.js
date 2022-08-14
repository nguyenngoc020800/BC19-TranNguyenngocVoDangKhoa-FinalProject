import axiosClient from "./axiosClient";

export const getLocationList = () => {
  return axiosClient.get("locations");
};
