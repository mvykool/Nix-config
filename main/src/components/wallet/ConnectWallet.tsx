// src/components/ConnectWallet.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  connectWallet,
  getEthBalance,
  getUsdcBalance,
} from "../../utils/wallet";

const ConnectWallet: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [ethBalance, setEthBalance] = useState<string | null>(null);
  const [usdcBalance, setUsdcBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      setError(null);
      const { address } = await connectWallet();
      const ethBal = await getEthBalance(address);
      const usdcBal = await getUsdcBalance(address);
      setAddress(address);
      setEthBalance(ethBal);
      setUsdcBalance(usdcBal);
    } catch (err: any) {
      setError(err.message || "Failed to connect wallet");
    }
  };

  return (
    <div className="p-4 text-center bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {address ? (
        <>
          <h2 className="text-xl font-semibold mb-2">
            Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </h2>
          <p className="text-base mb-1">
            ETH Balance:{" "}
            {ethBalance ? parseFloat(ethBalance).toFixed(4) : "Loading..."} ETH
          </p>
          <p className="text-base mb-1">
            USDC Balance:{" "}
            {usdcBalance ? parseFloat(usdcBalance).toFixed(2) : "Loading..."}{" "}
            USDC
          </p>
        </>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Connect MetaMask
        </button>
      )}
      {error && (
        <div className="mt-4 p-2 bg-red-600 text-white rounded max-w-md w-full">
          {error}
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
