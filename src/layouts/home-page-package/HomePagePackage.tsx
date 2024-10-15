import React from "react";
import { homePagePackagesData } from "./HomePagePackage.data";
import PackageCard from "../../components/package-card/PackageCard";

const HomePagePackage = () => {
  const data = homePagePackagesData;
  return (
    <div className="relative min-h-screen flex flex-col gap-10 items-center justify-center">
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-6xl font-semibold text-custom-pink">
          Pricelist Package
        </h1>
        <span className="min-h-[5px] mt-3 min-w-[60px] bg-custom-pink"></span>
      </div>
      <div className="flex items-center justify-center gap-10 max-xl:flex-col mb-10">
        {data.map((item, index) => (
          <PackageCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HomePagePackage;