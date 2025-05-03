// src/utils/prices.ts
import axios from "axios";

const COINGECKO_API = "https://api.coingecko.com/api/v3";

export const getTokenPrices = async (ids: string[]) => {
  try {
    const response = await axios.get(`${COINGECKO_API}/simple/price`, {
      params: {
        ids: ids.join(","), // e.g., 'ethereum,usd-coin'
        vs_currencies: "usd",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch prices:", error);
    throw error;
  }
};
