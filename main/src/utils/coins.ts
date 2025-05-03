import axios from "axios";

const COINGECKO_API = "https://api.coingecko.com/api/v3";

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  current_price: number;
}

export const getPopularCoins = async (): Promise<Coin[]> => {
  try {
    const response = await axios.get(`${COINGECKO_API}/coins/markets`, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10, // Top 10 coins
        page: 1,
        sparkline: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch popular coins:", error);
    throw error;
  }
};
