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
        <div className="productImage-hover overflow-clip">
          <div className="absolute flex bottom-[2%] pl-3 gap-x-3 z-10">
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
      <h4>{title}</h4>
      <p className="text-black/60">₹ {price}</p>
    </div>
  );
};

export default ProductCard;
