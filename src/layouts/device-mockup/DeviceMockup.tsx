import React from "react";
import MobileView from "../../components/mobile-view/MobileView";
import { useDeviceContext } from "../../context/device-context/DeviceContext";
import DesktopView from "../../components/desktop-view/DesktopView";
import Button from "../../components/button/Button";

const DeviceMockup = () => {
  const { deviceState } = useDeviceContext();
  return (
    <div className="flex flex-col items-center justify-center">
      {deviceState === "phone" && <MobileView />}
      {deviceState === "desktop" && <DesktopView />}
      <Button onClick={() => {}} className="flex items-center justify-center gap-2 w-fit px-5 rounded-full my-5">
        <img src="assets/images/view.png" alt="view" className="w-5"/>
        <p className="text-custom-white font-semibold">View</p>
      </Button>
    </div>
  );
};

export default DeviceMockup;
