import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";

export const walletConnectProjectId =
  process.env.NEXT_PUBLIC_PROJECT_ID || "";

export const wagmiConfig = getDefaultConfig({
  appName: "fund loop",
  projectId: walletConnectProjectId,
  chains: [mainnet, sepolia],
});


