import React from "react";
import { useMobileView } from "../../../libs/checkMobileView";
import { isMobile } from "react-device-detect";
import BlackPinkMobileTemplate from "./mobile/BlackPinkMobileTemplate";
import BlackPinkWebTemplate from "./web/BlackPinkWebTemplate";
import { ITemplatesPage } from "../TemplatesPage.interfaces";

const BlackPinkTemplate = (props: ITemplatesPage) => {
  const mobileView = useMobileView();

  if (mobileView || isMobile) return <BlackPinkMobileTemplate template={props.template} />;
  else return <BlackPinkWebTemplate template={props.template} />;
};

export default BlackPinkTemplate;
