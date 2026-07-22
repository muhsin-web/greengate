import { tokenStorage } from "@/api";
import { jwtDecode } from "jwt-decode";

export const isTokenValid = () => {
  const token = tokenStorage.getAccessTokenSync();
  console.log(token);
  if (!token) return false;

  const { exp } = jwtDecode<{ exp: number }>(token);
  if (!exp) return false;
  const now = Date.now();

  return exp * 1000 > now;
};
