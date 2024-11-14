import React from "react";
import MobileView from "../../components/mobile-view/MobileView";
import { useDeviceContext } from "../../context/device-context/DeviceContext";
import DesktopView from "../../components/desktop-view/DesktopView";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import GenerateTemplate from "../../components/generate-template/GenerateTemplate";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/Store";
import { TemplateMapper } from "../../libs/Template";

const DeviceMockup = () => {
  const { deviceState } = useDeviceContext();
  const navigate = useNavigate();
  const templatePersonalized = useSelector(
    (state: RootState) => state.template
  );

  const handleNavigate = () => {
    if (
      templatePersonalized.templateId !== "" &&
      templatePersonalized.templateId !== null
    )
      navigate("/edit/view");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {deviceState === "phone" && <MobileView />}
      {deviceState === "desktop" && <DesktopView />}
      <Button
        onClick={handleNavigate}
        className="flex items-center justify-center gap-2 w-fit px-5 rounded-full my-5"
      >
        <img src="assets/images/view.png" alt="view" className="w-5" />
        <p className="text-custom-white font-semibold">View</p>
      </Button>
    </div>
  );
};

export default DeviceMockup;
