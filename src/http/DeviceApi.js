import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const getTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const addType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const getBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const addBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const getDevices = async () => {
  const { data } = await $host.get("api/device");
  return data;
};

export const addDevice = async (device) => {
  const { data } = await $host.post("api/device", device);
  return data;
};

export const getDeviceById = async (id) => {
  const { data } = await $host.get(`api/device/${id}`);
  return data;
};
