import React from "react";
import { useMobileView } from "../../../libs/checkMobileView";
import { isMobile } from "react-device-detect";
import BlackPinkMobileTemplate from "./mobile/BlackPinkMobileTemplate";
import BlackPinkWebTemplate from "./web/BlackPinkWebTemplate";

const BlackPinkTemplate = () => {
  const mobileView = useMobileView();

  if (mobileView || isMobile) return <BlackPinkMobileTemplate />;
  else return <BlackPinkWebTemplate />;
};

export default BlackPinkTemplate;
