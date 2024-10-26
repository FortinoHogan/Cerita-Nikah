import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-[#f093b5] z-50 px-20 py-10">
      <div className="w-full flex items-start justify-center gap-40 pb-5 max-2xl:flex-col max-2xl:gap-10">
        <div className="w-[45%] flex flex-col gap-5 max-2xl:w-full">
          <img src="assets/images/logo-white.png" alt="logo" className="w-16" />
          <p className="text-custom-white font-semibold">
            Cerita Nikah is a wedding invitation service where users can choose
            from pre-made packages and templates. With the data provided by the
            user, we create personalized digital invitations, offering
            customizable options and essential features for your special day
          </p>
        </div>
        <div className="w-[20%] flex flex-col gap-5 max-2xl:w-full">
          <h1 className="text-custom-white font-semibold text-4xl">
            Contact Us
          </h1>
          <div className="flex items-center gap-5">
            <img
              src="assets/images/instagram.png"
              alt="instagram"
              className="w-10 cursor-pointer"
              onClick={() => window.open("https://www.instagram.com")}
            />
            <img
              src="assets/images/email-footer.png"
              alt="email"
              className="w-10 cursor-pointer"
              onClick={() => window.open("https://www.gmail.com")}
            />
            <img
              src="assets/images/whatsapp-footer.png"
              alt="whatsapp"
              className="w-10 cursor-pointer"
              onClick={() => window.open("https://www.whatsapp.com")}
            />
            <img
              src="assets/images/facebook.png"
              alt="facebook"
              className="w-10 cursor-pointer"
              onClick={() => window.open("https://www.facebook.com")}
            />
          </div>
        </div>
        <div className="w-[35%] flex flex-col justify-center gap-5 max-2xl:w-full">
          <h1 className="text-custom-white font-semibold text-4xl">
            Payment Methods
          </h1>
          <div className="flex gap-5 max-sm:flex-col">
            <div className="flex items-center gap-5">
              <img src="assets/images/qris.png" alt="qris" className="w-28" />
              <img
                src="assets/images/shopeepay.png"
                alt="shopeepay"
                className="w-10"
              />
              <img src="assets/images/gopay.png" alt="gopay" className="w-10" />
            </div>
            <div className="flex items-center gap-5">
              <img src="assets/images/dana.png" alt="dana" className="w-10" />
              <img src="assets/images/visa.png" alt="visa" className="w-28" />
            </div>
          </div>
        </div>
      </div>
      <hr className="h-[2px] w-full mt-3 bg-white border-0 rounded-sm" />
      <div className="text-custom-white font-semibold flex items-center justify-between pt-7 max-sm:flex-col max-sm:items-start max-sm:gap-5">
        <p>&copy; 2024 Cerita Nikah. All rights reserved.</p>
        <div className="flex gap-10 max-sm:flex-col max-sm:gap-0">
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
