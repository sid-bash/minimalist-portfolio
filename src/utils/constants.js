import { getBaseUrl } from "../app/config";

export const BASE_URL = getBaseUrl();

export const AUTH = {
  TOKEN: "token",
  USER: "user",
};

export const ACCESS = {
  ADMIN: "admin",
  USER: "user",
};

export const ROLE = {
  ADMIN: "Admin",
  USER: "User",
};

export const API = {
  MAX_RETRIES: 2,
};

export const DEFAULTS = {
  FILTER: "-all-",
  CONSUMED_STATUS: ["Error", "Pending", "Processed"],
};

const newGrey = "#f4f4f5";
const textLight = "#9f9fa9";
const textDark = "#52525c";
