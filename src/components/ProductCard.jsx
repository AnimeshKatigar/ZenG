import Image from "next/image";
import QuickView from "./Layovers/QuickView";
import QuickShop from "./Layovers/QuickShop";

const ProductCard = ({ singlePhoto = false, details }) => {
  return (
    <div>
      <div className="relative cursor-pointer ">
        {!singlePhoto && <Image
          src="https://images.pexels.com/photos/5878803/pexels-photo-5878803.jpeg"
          className="productImage min-h-[120px] min-w-[120px] aspect-square"
          width={350}
          height={350}
          alt="image"
        />}
        <div className={`${!singlePhoto ? "productImage-hover" : "singleProductImage"} overflow-clip font-GothamLight`}>
          <div className="absolute flex bottom-[2%] justify-center gap-x-2 w-full z-10">
            <QuickView
              dialogTriggerComponent={() => (
                <div className="rounded-full bg-black text-white px-4 py-2 viewBtn">
                  <span className="w-full text-center">Quick view</span>
                </div>
              )}
              data={details}
              dialogCloseComponent={()=>(
                <button>
                  Close
                </button>
              )}
            />
            <div className="rounded-full bg-black text-white px-4 py-2 viewBtn">
              <span className="w-full text-center">Quick Shop</span>
            </div>
          </div>
          <Image
            src="https://images.pexels.com/photos/5878807/pexels-photo-5878807.jpeg"
            className="min-h-[120px] min-w-[120px] aspect-square"
            width={350}
            height={350}
            alt="image"
          />
        </div>
      </div>
      <div className="my-2">

      <h4 className="font-GothamBlack text-sm mb-0.5">{details.title}</h4>
      <p className="font-GothamMedium text-sm text-black/60">₹ {details.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
