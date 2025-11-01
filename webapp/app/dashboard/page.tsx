import CenteredLayout from "@/components/centeredLayout";
import Link from "next/link";

const linkClassName = "w-full h-full bg-zinc-900 rounded-lg shadow p-12 flex flex-col justify-end gap-4 text-center hover:scale-105 cursor-pointer transition-all";

export default function Dashboard() {
    return (
        <CenteredLayout>
            <div className="text-center">
                <h1 className="text-4xl font-bold text-zinc-600 font-medium mb-4">select your dashboard</h1>
                <p>choose how you want to use fund loop</p>
            </div>

            <div className="grid max-w-4xl w-full h-128 grid-cols-1 sm:grid-cols-[1fr_1px_1fr] gap-12">
                <Link
                    href="/dashboard/funding"
                    className={linkClassName}
                >
                    <h2 className="text-purple-400 font-bold text-3xl">funding</h2>
                    <p className="text-white">
                        deposit your crypto to fund others in need & benefit from receiving
                        cred through badges & rewards
                    </p>
                </Link>
                <div className="w-[1px] h-full py-12">
                    <div className="w-full h-full bg-zinc-300 rounded-full"></div>
                </div>
                <Link
                    href="/dashboard/support"
                    className={linkClassName}
                >
                    <h2 className="text-purple-400 font-bold text-3xl">support</h2>
                    <p className="text-white">
                        post about what you're building & find the funding you need
                    </p>
                </Link>
            </div>
        </CenteredLayout>
    );
}