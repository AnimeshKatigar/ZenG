"use client"
import Image from "next/image";
import LandingPage from "../../public/assets/images/LandingPage.png";
import Reveal from "@/components/Reveal";
import BestSellers from "@/components/Sections/BestSellers";
import NewDrops from "@/components/Sections/NewDrops";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Reveal customInitial={{opacity:0}} customFinal={{opacity:1}}>
        <Image
          src={LandingPage}
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
        <NewDrops/>
      </div>
    </main>
  );
}
