/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExternalProvider } from "ethers";

interface Window {
  ethereum?: ExternalProvider | any;
}
