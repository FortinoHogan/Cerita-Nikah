import React, { useState } from "react";
import { templatesData } from "./Templates.data";
import Button from "../../button/Button";
import SwtichButton from "../../switch-button/SwitchButton";
import { RootState, store } from "../../../services/redux/Store";
import { SET_TEMPLATE } from "../../../services/redux/template-slice/TemplateSlice";
import { useSelector } from "react-redux";

const ConfirmationTemplate = ({
  title,
  image,
  onClick,
}: {
  title: string;
  image?: string;
  onClick: () => void;
}) => {
  return (
    <div>
      <p className="font-semibold text-custom-gray pr-16 mb-2">
        <span className="text-custom-pink">"{title}"</span> is selected as your
        wedding invitation
      </p>
      <div className="flex flex-col gap-8">
        <div className="bg-[#d9d9d9] rounded-xl h-96">
          <img className="w-full h-full object-cover rounded-xl" src={image} alt="" />
        </div>
        <Button
          onClick={onClick}
          children="Change Template"
          className="w-full text-custom-white font-semibold"
        />
      </div>
    </div>
  );
};

const TemplatesForm = () => {
  const [selected, setSelected] = useState("Free Spirit");
  const { templateId, templateName } = useSelector(
    (state: RootState) => state.template
  );
  const data = templatesData;

  const changeTemplate = (id: string, name: string) => {
    store.dispatch(SET_TEMPLATE({ templateId: id, templateName: name }));
  };

  return (
    <div className="overflow-y-auto scrollbar-hidden flex flex-col gap-7">
      {templateId ? (
        <ConfirmationTemplate
          title={templateName}
          image={data.find((item) => item.id === templateId)?.image}
          onClick={() => changeTemplate("", "")}
        />
      ) : (
        <>
          <SwtichButton
            selected={selected}
            setSelected={setSelected}
            option1="Free Spirit"
            option2="Do It Yourself"
          />
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 cursor-pointer"
              onClick={() => changeTemplate(item.id, item.title)}
            >
              <h1 className="font-semibold text-custom-gray">{item.title}</h1>
              <div className="bg-[#d9d9d9] rounded-xl h-96">
                <img className="w-full h-full object-cover rounded-xl" src={item.image} alt="" />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TemplatesForm;
