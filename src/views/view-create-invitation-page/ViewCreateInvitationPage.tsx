import React, { useState } from "react";
import GenerateTemplate from "../../components/generate-template/GenerateTemplate";
import { templatePersonalizedExample } from "../../libs/templatePersonalized.example";

const ViewCreateInvitationPage = () => {
  const [template, setTemplate] = useState(templatePersonalizedExample);
  
  return <GenerateTemplate template={template} />;
};

export default ViewCreateInvitationPage;
