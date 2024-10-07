import React from "react";
import BlackPinkTemplate from "../views/templates-page/black-pink-template/BlackPinkTemplate";
import WhiteBlossomTemplate from "../views/templates-page/white-blossom-template/WhiteBlossomTemplate";
import HomePage from "../views/home-page/HomePage";
import { useNavigate } from "react-router-dom";

interface ITemplateData {
  id: string,
  view: React.FC
}

const TemplateData: ITemplateData[] = [
  {
    id: "282a56a0-516d-48ab-ac6c-679e5417e034",
    view: BlackPinkTemplate,
  },
  {
    id: "efde7119-e53d-4733-9cc7-38cd2300d205",
    view: WhiteBlossomTemplate,
  },
];

export const TemplateGenerator = (templateId: string) => {
  const template = TemplateData.find((template) => template.id === templateId);
  
  return template ? <template.view /> : <HomePage />;
}
