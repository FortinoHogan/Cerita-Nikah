import React from "react";
import { ITemplatePersonalizedPage } from "./TemplatePersonalizedPage.interfaces";
import GenerateTemplate from "../../components/generate-template/GenerateTemplate";
import { ITemplatesPage } from "../templates-page/TemplatesPage.interfaces";

const TemplatePersonalizedPage = (props: ITemplatesPage) => {
  const { template } = props;

  return <GenerateTemplate template={template} />;
};

export default TemplatePersonalizedPage;
