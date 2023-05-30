import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  console.log($host);
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    // role: "ADMIN",
  });
  return jwt_decode(data.result.token);
};

export const logIn = async (email, password) => {
  const { data } = await $authHost.post("api/user/signin", {
    email,
    password,
  });
  console.log(jwt_decode(data.token));

  return jwt_decode(data.token);
};

export const currentUser = async () => {
  const { data } = await $authHost.get("api/user/current");
  return jwt_decode(data.result.token);
};
