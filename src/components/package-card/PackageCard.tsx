import React from "react";
import { IPackageCard } from "./IPackageCard";

const PackageCard = (props: IPackageCard) => {
  const { title, price, image, radio, feature, strightroughPrice } = props;
  const priceParts = price.split("\n");
  return (
    <div className="rounded-3xl bg-custom-white min-h-[45rem] max-sm:max-w-[20rem] max-sm:min-h-[46rem] max-sm:min-w-0 min-w-[25rem] max-w-[25rem] relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-300 hover:scale-105">
      <img src={image} alt="title" className="object-cover w-full" />
      <div className="p-12 absolute top-0 w-full">
        <h1 className="font-semibold text-3xl text-custom-gray">{title}</h1>
        <div className="flex flex-col gap-2 mt-20">
          <div className="flex justify-center items-center flex-col">
            {strightroughPrice && (
              <h1 className="font-semibold text-2xl text-custom-gray text-center line-through">
                {strightroughPrice}
              </h1>
            )}
            <div className="mb-10">
              {priceParts.map((part, index) => (
                <h1 className="font-semibold text-3xl text-custom-gray text-center">
                  {part}
                  {index < priceParts.length - 1 && <br />}
                </h1>
              ))}
            </div>
          </div>
          {feature.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              <img src={radio} alt="radio" className="w-5" />
              <p className="break-words">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
