import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  console.log({session})
  return <Layout>
   <div className="text-blue-900 flex"> 
  Hello, {session?.user?.name}
  <div className="flex">

  <img src={session?.user?.image} alt="" className="w-6 h-6"/>
  {session?.user?.name}
  </div>
   </div>
  </Layout>
}
