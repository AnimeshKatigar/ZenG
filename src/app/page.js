"use client"
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      title: "Ring",
      price: "250",
    },
    {
      title: "Earrings",
      price: "300",
    },
    {
      title: "Bracelet",
      price: "750",
    },
    {
      title: "Bracelet",
      price: "750",
    },
  ];
  return (
    <main className="">
      <div className="bg-gray-700 flex flex-col h-[80vh] items-center justify-between p-24 lg:flex-row">
        <h1 className="uppercase text-[100px] text-black w-1/2">
          For the Genz
        </h1>
        <div className="h-32 w-full bg-red-950" />
      </div>
      <div className="px-[10%] w-full py-8">
        <h2 className="text-black text-xl uppercase mb-8">BestSellers</h2>
        <div className="flex gap-x-4 items-center justify-between">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
