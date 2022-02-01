import { API_BASE } from "../utils/constants";

export async function getProducts() {
  const response = await fetch(`${API_BASE}products/`);
  return await response.json();
}

export async function getProduct(id) {
  const response = await fetch(`${API_BASE}products/${id}`);
  return await response.json();
}
