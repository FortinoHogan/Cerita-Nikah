import React from "react";
import { IPackageCard } from "./IPackageCard";

const PackageCard = (props: IPackageCard) => {
  const { title, price, image, radio, feature } = props;
  return (
    <div className="rounded-3xl bg-custom-white min-h-[45rem] min-w-[25rem] max-w-[25rem] relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-300 hover:scale-105">
      <img
        src={image}
        alt="title"
        className="object-cover w-full"
      />
      <div className="p-12 absolute top-0 w-full">
        <h1 className="font-semibold text-3xl text-custom-gray">{title}</h1>
        <div className="flex flex-col gap-2 mt-20">
          <h1 className="font-semibold text-3xl text-custom-gray text-center mb-10">{price}</h1>
          {feature.map((item, index) => (
            <div className="flex items-center gap-2">
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
