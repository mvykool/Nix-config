/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/ConnectWallet.tsx
import React, { useState } from "react";
import Portfolio from "./Portfolio";
import {
  connectWallet,
  getEthBalance,
  getUsdcBalance,
} from "../../utils/wallet";
import { getTokenPrices } from "../../utils/prices";

const ConnectWallet: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [ethBalance, setEthBalance] = useState<string | null>(null);
  const [usdcBalance, setUsdcBalance] = useState<string | null>(null);
  const [ethValue, setEthValue] = useState<number | null>(null);
  const [usdcValue, setUsdcValue] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      setError(null);
      const { address } = await connectWallet();
      const ethBal = await getEthBalance(address);
      const usdcBal = await getUsdcBalance(address);

      // Fetch prices
      const prices = await getTokenPrices(["ethereum", "usd-coin"]);
      const ethPrice = prices.ethereum.usd;
      const usdcPrice = prices["usd-coin"].usd;

      // Calculate USD values
      const ethVal = parseFloat(ethBal) * ethPrice;
      const usdcVal = parseFloat(usdcBal) * usdcPrice;

      setAddress(address);
      setEthBalance(ethBal);
      setUsdcBalance(usdcBal);
      setEthValue(ethVal);
      setUsdcValue(usdcVal);
    } catch (err: any) {
      setError(err.message || "Failed to connect wallet");
    }
  };

  return (
    <div className="p-4 text-center bg-gray-900 text-white min-h-screen">
      {address ? (
        <>
          <h2 className="text-xl font-semibold mb-4">
            Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </h2>
          {ethBalance &&
          usdcBalance &&
          ethValue !== null &&
          usdcValue !== null ? (
            <Portfolio
              ethBalance={ethBalance}
              usdcBalance={usdcBalance}
              ethValue={ethValue}
              usdcValue={usdcValue}
            />
          ) : (
            <p className="text-gray-400">Loading portfolio...</p>
          )}
        </>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect MetaMask
        </button>
      )}
      {error && (
        <div className="mt-4 p-2 bg-red-600 text-white rounded">{error}</div>
      )}
    </div>
  );
};

export default ConnectWallet;
