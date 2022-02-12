import { API_BASE } from "../utils/constants";

export async function getRequest(endpoint) {
  const response = await fetch(`${API_BASE}${endpoint}`);

  return await response.json();
}
