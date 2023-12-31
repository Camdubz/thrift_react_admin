import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import "@/styles/globals.css";

export default function Home() {
  const { data: session } = useSession();
  console.log({ session });
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>Hello, {session?.user?.name}</h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="" className="w-6 h-6" />
          <span className="px-2"></span>
          {session?.user?.name}
        </div>
      </div>
    </Layout>
  );
}
