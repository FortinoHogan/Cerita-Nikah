import React, { useState } from "react";
import { TemplateGenerator } from "../../libs/Template";
import { IGeneratorTemplate } from "./GeneratorTemplate.interfaces";

const GenerateTemplate = (props: IGeneratorTemplate) => {
  const { id } = props;
  const generateTemplate = TemplateGenerator(id);

  return <> {generateTemplate} </>;
};

export default GenerateTemplate;
