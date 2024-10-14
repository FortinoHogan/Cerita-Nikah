import React from "react";
import { ITemplateCopyright } from "./TemplateCopyright.interfaces";

const TemplateCopyright = (props: ITemplateCopyright) => {
  const { backgroundColor } = props;
  return (
    <div
      className={`${backgroundColor} font-poppins flex items-center justify-center py-5`}
    >
      <p className="text-sm px-2 text-center">
        This invitation was made for free using
        <span className="text-[#FFA5A5]"> ceritanikah.online</span>
      </p>
    </div>
  );
};

export default TemplateCopyright;
