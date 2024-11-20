import React, { useEffect, useState } from "react";
import Sidebar from "../../layouts/sidebar/Sidebar";
import Navbar from "../../layouts/navbar/Navbar";
import FloatingDeviceContainer from "../../layouts/floating-device-container/FloatingDeviceContainer";
import EditTemplateForm from "../../layouts/edit-template-form/EditTemplateForm";
import DeviceMockup from "../../layouts/device-mockup/DeviceMockup";
import { DeviceProvider } from "../../context/device-context/DeviceContext";
import { FormProvider } from "../../context/form-context/FormContext";
import { ContentProvider } from "../../context/content-context/ContentContext";
import { useAuth } from "../../context/auth-context/AuthContext";
import { Navigate } from "react-router-dom";
import { GalleryProvider } from "../../context/gallery-context/GalleryContext";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/Store";
import { addTemplatePersonalized } from "../../services/template-personalized/TemplateService";
import Button from "../../components/button/Button";
import { IMessage } from "../../interfaces/message.interfaces";
import Swal from "sweetalert2";
import Loading from "../../components/loading/Loading";

const CreateInvitationPage = () => {
  const authContext = useAuth();
  const templatePersonalized = useSelector(
    (state: RootState) => state.template
  );
  const [message, setMessage] = useState<IMessage>();
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    const createTemplate = await addTemplatePersonalized(templatePersonalized, authContext?.currentUser?.uid);
    setMessage(createTemplate);
    setLoading(false);
  };

  useEffect(() => {
    if (message) {
      if (message?.isSuccess) {
        Swal.fire({
          title: message?.message,
          text: "Wedding Invitation Created Successfully",
          icon: "success",
          confirmButtonColor: "#e64d87",
        });
      } else {
        Swal.fire({
          title: "Unable to Create Wedding Invitation",
          text: message?.message,
          icon: "error",
          confirmButtonColor: "#e64d87",
        });
      }
    }
  }, [message]);

  return (
    <div className="h-screen flex flex-col gap-10 max-lg:gap-7">
      {loading && <Loading />}
      {!authContext?.isLogin && <Navigate to={"/"} />}
      <div className="h-[9%]">
        <Navbar />
      </div>
      <img
        src="assets/images/background.png"
        alt="background"
        className="w-full h-full absolute opacity-[30%] object-cover object-right"
      />
      <div className="h-[91%] px-10 max-lg:px-5 pb-10 w-full flex justify-center relative overflow-hidden max-md:flex-col-reverse max-md:overflow-y-auto scrollbar-hidden max-md:h-auto max-sm:min-h-[300vh] ">
        <div className="w-[50%] flex justify-center gap-5 z-40 max-md:w-full max-md:min-h-[80vh] max-md:mb-[50rem] max-sm:flex-col max-sm:min-h-[80vh] max-sm:mb-[100rem]">
          <FormProvider>
            <div className="w-[50%] max-sm:w-full">
              <Sidebar />
            </div>
            <div className="w-[50%] max-sm:w-full">
              <ContentProvider>
                <GalleryProvider>
                  <EditTemplateForm />
                </GalleryProvider>
              </ContentProvider>
            </div>
          </FormProvider>
        </div>
        <div className="w-[50%] relative h-full flex items-center justify-center max-md:w-full max-md:min-h-[75vh] max-md:mt-14 max-sm:min-h-[40%] max-sm:my-20">
          <DeviceProvider>
            <FloatingDeviceContainer />
            <Button
              onClick={handleSave}
              className="w-[15.5rem] max-2xl:w-[13rem] max-xl:w-[11rem] p-3 max-2xl:pb-4 max-2xl:pt-2 max-2xl:px-4 rounded-xl absolute top-40 right-0 flex flex-col gap-6 text-custom-white items-center justify-center"
              children="Save Changes"
            />
            <DeviceMockup />
          </DeviceProvider>
        </div>
      </div>
    </div>
  );
};

export default CreateInvitationPage;
