'use client'

import { RainbowKitProvider, lightTheme, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "@/lib/wagmi";
import { useEffect, useMemo, useState } from "react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  const [accentColor, setAccentColor] = useState<string>("#7b3fe4");
  const [accentColorForeground, setAccentColorForeground] = useState<string>("#ffffff");

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const primary = styles.getPropertyValue("--primary").trim();
    const primaryFg = styles.getPropertyValue("--primary-foreground").trim();
    if (primary) setAccentColor(primary);
    if (primaryFg) setAccentColorForeground(primaryFg);
  }, []);

  const rkTheme = useMemo(
    () => ({
      lightMode: lightTheme({
        accentColor,
        accentColorForeground,
        borderRadius: "medium",
        fontStack: "system",
        overlayBlur: "small",
      }),
      darkMode: darkTheme({
        accentColor,
        accentColorForeground,
        borderRadius: "medium",
        fontStack: "system",
        overlayBlur: "small",
      }),
    }),
    [accentColor, accentColorForeground]
  );

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={rkTheme}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}


