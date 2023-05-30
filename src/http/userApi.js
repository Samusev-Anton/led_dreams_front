import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    // role: "ADMIN",
  });
  localStorage.setItem("token", data.result.token);
  return jwt_decode(data.result.token);
};

export const logIn = async (email, password) => {
  const { data } = await $authHost.post("api/user/signin", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const currentUser = async () => {
  const { data } = await $authHost.get("api/user/current");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
