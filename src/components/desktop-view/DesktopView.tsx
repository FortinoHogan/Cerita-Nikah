import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/Store";
import { TemplateMapper } from "../../libs/Template";
import GenerateTemplate from "../generate-template/GenerateTemplate";

const DesktopView = () => {
  const templatePersonalized = useSelector(
    (state: RootState) => state.template
  );
  const template = TemplateMapper(templatePersonalized);

  return (
    <div className="mt-36">
      <div className="relative mt-16 mx-auto border-gray-800 border-[12px] max-2xl:border-[12px] max-xl:border-[10px] rounded-t-xl h-[306px] w-[604px] max-2xl:h-[245px] max-2xl:w-[497px] max-xl:h-[165px] max-xl:w-[380px] max-lg:h-[149px] max-lg:w-[332px]">
        <div className={`rounded-xl scrollbar-hidden overflow-y-auto h-[294px] ${template.templateId === "" ? "bg-white" : templatePersonalized.templateColor} max-2xl:h-[220px] max-xl:h-[145px] max-lg:h-[129px]`}>
          {template.templateId === "" ? (
            <div className="flex justify-center items-center h-full">
              <img className="w-2/6" src="/assets/images/logo.png" alt="" />
            </div>
          ) : (
            <GenerateTemplate template={template} view="mobile" />
          )}{" "}
        </div>
      </div>
      <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[12px] max-w-[604px] max-2xl:h-[10px] max-xl:h-[10px]"></div>
      <div className="relative mx-auto bg-gray-800 h-[55px] max-w-[51px] max-2xl:w-[60px] max-xl:w-[44px] max-lg:w-[46px] max-2xl:h-[31px] max-xl:h-[11px] max-lg:h-[9px]"></div>
      <div className="relative mx-auto bg-gray-800 rounded-b-xl rounded-t-sm h-[21px] max-w-[397px] max-2xl:h-[18px] max-xl:h-[18px] max-lg:h-[13px]"></div>
    </div>
  );
};

export default DesktopView;
