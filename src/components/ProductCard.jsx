import Image from "next/image";
import QuickView from "./Layovers/QuickView";
import QuickShop from "./Layovers/QuickShop";

const ProductCard = ({ singlePhoto = false, details }) => {
  return (
    <div className="p-2">
      <div className="relative cursor-pointer hover:shadow-xl">
        {!singlePhoto && (
          <Image
            src={details?.img}
            className="productImage aspect-square"
            // width={350}
            // height={350}
            alt="image"
          />
        )}
        <div
          className={`${
            !singlePhoto ? "productImage-hover" : "singleProductImage"
          } overflow-clip font-GothamLight`}
        >
          <div className="absolute flex bottom-[2%] justify-center gap-x-2 w-full z-10">
            <QuickView
              dialogTriggerComponent={() => (
                <div className="rounded-full bg-black text-white px-4 py-2 viewBtn">
                  <span className="w-full text-center">Quick view</span>
                </div>
              )}
              data={details}
              dialogCloseComponent={() => <button>Close</button>}
            />
            <div className="rounded-full bg-black text-white px-4 py-2 viewBtn">
              <span className="w-full text-center">Quick Shop</span>
            </div>
          </div>
          <Image
            src={singlePhoto ? details.img : details?.variants?.[0]?.img}
            className="w-full aspect-square object-fit"
            alt="image"
          />
        </div>
      </div>
      <div className="my-4 w-[320px]">
        <h4 className="font-GothamBlack text-sm mb-0.5">{details.title}</h4>
        <p className="font-GothamMedium text-sm text-black/60">
          ₹ {details.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
