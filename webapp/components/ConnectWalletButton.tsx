'use client'

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ConnectWalletButton() {
  const router = useRouter();

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            aria-hidden={!ready}
            style={!ready ? { opacity: 0, pointerEvents: 'none', userSelect: 'none' } : undefined}
          >
            {!connected ? (
              <Button type="button" variant="default" onClick={openConnectModal}>
                Connect Wallet
              </Button>
            ) : chain?.unsupported ? (
              <Button type="button" variant="destructive" onClick={openChainModal}>
                Wrong network
              </Button>
            ) : (
              <Button type="button" variant="default" onClick={() => router.push('/dashboard')}>
                Dashboard
              </Button>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

