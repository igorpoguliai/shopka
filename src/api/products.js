import { getRequest } from "./index";

export async function getProducts() {
  return await getRequest("products/");
}

export async function getProduct(id) {
  return await getRequest(`products/${id}`);
}
