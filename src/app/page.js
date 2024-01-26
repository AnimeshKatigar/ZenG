"use client";
import PrimaryBtn from "@/components/PrimaryBtn";
import ProductCard from "@/components/ProductCard.jsx";
import Image from "next/image";
import ClawRingImage from "../../public/assets/images/OwlRing.png";
import Reveal from "@/components/Reveal";
import BestSellers from "@/components/Sections/BestSellers";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Reveal customInitial={{opacity:0}} customFinal={{opacity:1}}>
        <Image
          src={ClawRingImage}
          alt="Ring-Image"
          className="w-full object-cover"
        />
      </Reveal>
      {/* <h1 className="uppercase text-[100px] text-black w-1/2 font-GothamBlack">
          For the Genz
        </h1>
        <div className="h-32 w-full bg-red-950" /> */}
      {/* </div> */}
      <div className="px-[5%] md:px-[10%] w-full py-8">
        <BestSellers/>
      </div>
    </main>
  );
}
