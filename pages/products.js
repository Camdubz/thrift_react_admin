import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";


export default function Products() {
  useEffect(() => {
    axios.get("api/products").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <Layout>
      <Link className="btn-primary" href={"/products/new"}>
        Add new product
      </Link>
    </Layout>
  );
}
