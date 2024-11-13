import React, { useState } from "react";
import { TemplateGenerator } from "../../libs/Template";
import { IGeneratorTemplate } from "./GeneratorTemplate.interfaces";
import { ITemplatesPage } from "../../views/templates-page/TemplatesPage.interfaces";

const GenerateTemplate = (props: ITemplatesPage) => {
  const generateTemplate = TemplateGenerator(props);
  console.log("generateTemplate", generateTemplate);

  return <> {generateTemplate} </>;
};

export default GenerateTemplate;
