import axios from "axios";

const BASE_URL = "https://api.example.com";

const baseService = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

async function joinWaitlist(email: string) {
  try {
    const response = await baseService.post("/waitlist", { email });
    return response.data;
  } catch (error) {
    console.error("Error joining waitlist:", error);
    throw error;
  }
}

export default baseService;
export const WaitlistService = {
  joinWaitlist,
};
