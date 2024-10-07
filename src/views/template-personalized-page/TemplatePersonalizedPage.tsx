import React from "react";
import { ITemplatePersonalizedPage } from "./TemplatePersonalizedPage.interfaces";

const TemplatePersonalizedPage = (props: ITemplatePersonalizedPage) => {
  const { template } = props;
  return (
    <div>
      <div>{template.groom.fullName}</div>
      <div>{template.bride.fullName}</div>
    </div>
  );
};

export default TemplatePersonalizedPage;
