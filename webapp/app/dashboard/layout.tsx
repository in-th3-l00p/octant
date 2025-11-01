"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isConnected, status } = useAccount();

  if (status === "connecting" || !isConnected) 
    return redirect("/");

  return (
    <div>
      <div className="absolute top-0 right-0 p-8">
        <ConnectButton />
      </div>
      {children}
    </div>
  );
}