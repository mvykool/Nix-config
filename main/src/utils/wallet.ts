/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from "ethers";
import axios from "axios";

const ETHERSCAN_API_URL = "https://api-sepolia.etherscan.io/api";
const ETHERSCAN_API_KEY = "YOUR_API_KEY"; // Replace with your Etherscan API key

// Connect to MetaMask
export const connectWallet = async () => {
  const ethereum = (window as any).ethereum;
  if (ethereum) {
    try {
      // Request access to MetaMask
      await ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(ethereum); // Updated for v6
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      // Ensure Sepolia testnet (chainId 11155111)
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0xaa36a7" }], // Sepolia chainId in hex
        });
      } catch (switchError) {
        throw new Error(
          "Please switch to Sepolia testnet in MetaMask" + switchError,
        );
      }

      return { provider, signer, address };
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      throw error;
    }
  } else {
    throw new Error("MetaMask not installed");
  }
};

// Get ETH balance via Etherscan
export const getEthBalance = async (address: string) => {
  try {
    const response = await axios.get(ETHERSCAN_API_URL, {
      params: {
        module: "account",
        action: "balance",
        address,
        tag: "latest",
        apikey: ETHERSCAN_API_KEY,
      },
    });
    if (response.data.status === "1") {
      // Balance in wei, convert to ETH
      return ethers.formatEther(response.data.result); // Updated for v6
    } else {
      throw new Error("Failed to fetch ETH balance");
    }
  } catch (error) {
    console.error("Etherscan ETH balance error:", error);
    throw error;
  }
};

// Get USDC balance via Etherscan
export const getUsdcBalance = async (address: string) => {
  const USDC_CONTRACT_ADDRESS = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";
  try {
    const response = await axios.get(ETHERSCAN_API_URL, {
      params: {
        module: "account",
        action: "tokenbalance",
        contractaddress: USDC_CONTRACT_ADDRESS,
        address,
        tag: "latest",
        apikey: ETHERSCAN_API_KEY,
      },
    });
    if (response.data.status === "1") {
      // USDC has 6 decimals
      return ethers.formatUnits(response.data.result, 6); // Updated for v6
    } else {
      throw new Error("Failed to fetch USDC balance");
    }
  } catch (error) {
    console.error("Etherscan USDC balance error:", error);
    throw error;
  }
};
