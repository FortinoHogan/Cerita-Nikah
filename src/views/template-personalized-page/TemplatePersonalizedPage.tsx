import React from "react";
import { ITemplatePersonalizedPage } from "./TemplatePersonalizedPage.interfaces";
import GenerateTemplate from "../../components/generate-template/GenerateTemplate";

const TemplatePersonalizedPage = (props: ITemplatePersonalizedPage) => {
  const { template } = props;

  return <GenerateTemplate id={template.templateId} />;
};

export default TemplatePersonalizedPage;
