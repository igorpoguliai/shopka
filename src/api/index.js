import { API_BASE } from "../utils/constants";
import { toast } from "react-toastify";

export async function getRequest(endpoint) {
  const response = await fetch(`${API_BASE}${endpoint}`);

  if (!response.ok) {
    toast.error("Oops! Something went wrong...");
  }

  return await response.json();
}
