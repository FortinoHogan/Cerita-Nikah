import React, { useEffect, useState } from "react";
import { IImagePreview } from "./IImagePreview";

const ImagePreview = (props: IImagePreview) => {
  const { image, handleDeleteImage } = props;
  return (
    <div className="flex items-center justify-center w-full relative">
      <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#ef8ab0] border-dashed rounded-xl bg-[#f8c8d9]">
        <img
          src={image}
          alt="img-preview"
          className="object-cover h-full"
        />
        <img
          src="assets/images/delete.png"
          alt="preview"
          className="w-6 absolute top-5 right-5 cursor-pointer"
          onClick={handleDeleteImage}
        />
      </label>
    </div>
  );
};

export default ImagePreview;
