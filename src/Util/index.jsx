import axios from "axios";
const productionUrl = " https://shop.motorscloud.net/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};
export const sterTitel = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
export const setstring = (Username) => {
  return Username.toUpperCase().slice(0, 1);
};
export function splitFullName(fullName) {
  const spaceIndex = fullName.indexOf(" ");
  if (spaceIndex === -1) {
    return { firstName: fullName, lastName: "" };
  }
  const firstName = fullName.slice(0, spaceIndex);
  const lastName = fullName.slice(spaceIndex + 1);
  return { firstName, lastName };
}
