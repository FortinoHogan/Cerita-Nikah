import React from "react";
import { templatesData } from "../../components/edit-form-content/templates-form/Templates.data";

const HomePageTemplates = () => {
  const templates = templatesData; 
  return (
    <div className="relative min-h-screen flex flex-col gap-10 items-center justify-center">
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-6xl max-sm:text-4xl font-semibold text-custom-pink break-words">
          Template Design
        </h1>
        <span className="min-h-[5px] mt-3 min-w-[60px] bg-custom-pink max-sm:hidden"></span>
      </div>
      <div className="flex gap-20 max-xl:flex-col contentTemplate">
        {templates.map((template, index) => (
          <div className="flex flex-col items-center gap-5 w-fit rounded-xl transition-all duration-300 hover:scale-105" key={index}>
            <img
              className="w-full h-96 max-sm:max-w-[20rem] max-sm:max-h-[20rem] object-cover rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              src={template.image}
              alt=""
            />
            <p className="text-center text-2xl font-semibold text-custom-pink">{template.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageTemplates;
