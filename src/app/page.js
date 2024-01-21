"use client";
import PrimaryBtn from "@/components/PrimaryBtn";
import ProductCard from "@/components/ProductCard.jsx";
import Image from "next/image";
import ClawRingImage from "../../public/assets/images/OwlRing.png";
import Reveal from "@/components/Reveal";

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
    <main className="no-scrollbar">
      <Reveal>
        <Image
          src={ClawRingImage}
          alt="Ring-Image"
          className="w-full object-cover h-[80vh]"
        />
      </Reveal>
      {/* <h1 className="uppercase text-[100px] text-black w-1/2 font-GothamBlack">
          For the Genz
        </h1>
        <div className="h-32 w-full bg-red-950" /> */}
      {/* </div> */}
      <div className="px-[10%] w-full py-8">
        <Reveal>
          <h2 className="text-black text-2xl uppercase mb-8 font-GothamBlack">
            BestSellers
          </h2>
        </Reveal>
        <div className="flex gap-x-4 items-center justify-between">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={0.05 * (i + 1)}>
              <ProductCard title={product.title} price={product.price} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <PrimaryBtn customClasses="w-fit mx-auto my-4 text-center" />
        </Reveal>
      </div>
    </main>
  );
}
