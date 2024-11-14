import React from "react";
import { templatesData } from "../../components/edit-form-content/templates-form/Templates.data";

const HomePageTemplates = () => {
  const templates = templatesData;
  return (
    <div className="relative min-h-screen flex flex-col gap-10 items-center justify-center">
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-6xl max-sm:text-4xl font-semibold text-custom-pink">
          Template Design
        </h1>
        <span className="min-h-[5px] mt-3 min-w-[60px] bg-custom-pink max-sm:hidden"></span>
      </div>
      <div className="flex gap-14">
        {templates.map((template) => (
          <div className="bg-[#d9d9d9] w-[30rem] rounded-xl h-96 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={template.image}
              alt=""
            />
            <p className="text-center text-2xl mt-5 font-semibold text-custom-pink">{template.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageTemplates;
