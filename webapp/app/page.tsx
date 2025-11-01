import { Button } from "@/components/ui/button";
import { ConnectWalletButton } from "@/components/connectWalletButton";
import CenteredLayout from "@/components/centeredLayout";

export default function Home() {
  return (
    <CenteredLayout>
      <div className="space-y-4 flex flex-col items-center">
        <h1 className="text-8xl font-bold text-zinc-600 font-medium">fund loop</h1>
        <p>decentralized funding through deposits</p>
        <div className="flex gap-4">
          <ConnectWalletButton />
          <Button variant="outline">about</Button>
        </div>
      </div>

      <div className="grid max-w-3xl w-full w-full grid-cols-1 sm:grid-cols-[1fr_1px_1fr] gap-12">
        <div className="w-full h-96 bg-zinc-900 rounded-lg shadow p-12 flex flex-col justify-end gap-4 hover:scale-105 transition-all">
          <h2 className="text-purple-400 font-bold text-2xl">deposit & fund</h2>
          <p className="text-white">
            deposit your crypto to fund others in need & benefit from receiving
            cred through badges & rewards
          </p>
        </div>
        <div className="w-[1px] h-96 py-12">
          <div className="w-full h-full bg-zinc-300 rounded-full"></div>
        </div>
        <div className="w-full h-96 bg-zinc-900 rounded-lg shadow p-12 flex flex-col justify-end gap-4 hover:scale-105 transition-all">
          <h2 className="text-purple-400 font-bold text-2xl">find support</h2>
          <p className="text-white">
            post about what you're building & find the funding you need
          </p>
        </div>
      </div>
    </CenteredLayout>
  );
}
