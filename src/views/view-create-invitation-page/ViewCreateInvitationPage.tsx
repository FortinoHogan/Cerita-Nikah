import React, { useState } from "react";
import GenerateTemplate from "../../components/generate-template/GenerateTemplate";
import { templatePersonalizedExample } from "../../libs/templatePersonalized.example";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/Store";
import { TemplateMapper } from "../../libs/Template";

const ViewCreateInvitationPage = () => {
  const templatePersonalized = useSelector(
    (state: RootState) => state.template
  );
  
  const template = TemplateMapper(templatePersonalized);
  
  return <GenerateTemplate template={template} />;
};

export default ViewCreateInvitationPage;
