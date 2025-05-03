import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Coin, getPopularCoins } from "../../utils/coins";

const PopularCoins: React.FC = () => {
  const {
    data: coins,
    error,
    isLoading,
  } = useQuery<Coin[]>({
    queryKey: ["popularCoins"],
    queryFn: getPopularCoins,
    staleTime: 60 * 1000, // Cache for 1 minute
  });

  return (
    <div className="p-4 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">
        Top 10 Cryptocurrencies
      </h2>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full text-left text-white">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3">Rank</th>
              <th className="p-3">Coin</th>
              <th className="p-3">Symbol</th>
              <th className="p-3">Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4} className="p-3 text-center text-gray-400">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={4} className="p-3 text-center text-red-600">
                  Failed to load coins: {(error as Error).message}
                </td>
              </tr>
            ) : (
              coins?.map((coin) => (
                <tr
                  key={coin.id}
                  className="border-t border-gray-700 hover:bg-gray-700"
                >
                  <td className="p-3">{coin.market_cap_rank}</td>
                  <td className="p-3">{coin.name}</td>
                  <td className="p-3 uppercase">{coin.symbol}</td>
                  <td className="p-3">${coin.current_price.toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopularCoins;
