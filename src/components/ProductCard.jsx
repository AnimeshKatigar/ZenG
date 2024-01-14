import Image from "next/image";
import { motion } from "framer-motion";

const ProductCard = ({ title, price }) => {
  return (
    <div>
      <div className="relative cursor-pointer">
        <Image
          src="https://images.pexels.com/photos/5878803/pexels-photo-5878803.jpeg"
          class="productImage"
          width={350}
          height={350}
          alt="image"
        />
        <div className="productImage-hover overflow-clip font-GothamLight">
          <div className="absolute flex bottom-[2%] justify-center gap-x-2 w-full z-10">
            <div className="rounded-full bg-black text-white px-4 py-2 viewBtn">
              <span className="w-full text-center">Quick view</span>
            </div>
            <div className="rounded-full bg-black text-white px-4 py-2 viewBtn">
              <span className="w-full text-center">Quick Shop</span>
            </div>
          </div>
          <Image
            src="https://images.pexels.com/photos/5878807/pexels-photo-5878807.jpeg"
            className=""
            width={350}
            height={350}
            alt="image"
          />
        </div>
      </div>
      <h4 className="font-GothamBlack text-sm">{title}</h4>
      <p className="font-GothamBlack text-sm text-black/60">₹ {price}</p>
    </div>
  );
};

export default ProductCard;
