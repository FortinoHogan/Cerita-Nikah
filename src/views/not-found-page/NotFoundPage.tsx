import React from "react";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  
  const handleRedirect = () => {
    const { hostname, port } = window.location;
    let baseDomain;

    if (hostname.includes("localhost")) {
      baseDomain = `localhost:${port}`;
      window.location.href = `http://${baseDomain}`;
    } else {
      baseDomain = hostname.split(".").slice(-2).join(".");
      window.location.href = `https://${baseDomain}`;
    }
  };

  return (
    <div className="min-h-screen flex bg-[#FFFCFA] justify-center items-center">
      <img
        src="assets/images/background.png"
        alt="background"
        className="w-full h-full opacity-[30%] object-cover object-right fixed z-0"
      />

      <div className="z-10 p-4 text-center max-w-4xl max-auto">
        <img
          src="/assets/images/404.svg"
          className="w-3/4 mx-auto lg:w-1/3"
          alt="404"
        />

        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
          Page Not Found!
        </h1>

        <p className="text-md lg:text-xl text-gray-600 mb-10 max-w-4xl mx-auto">
          Oops! It looks like the page you're trying to reach doesn't exist.
          This might be due to a mistyped URL, or the page may have been moved
          or deleted. Don't worry, though! You can head back using the button
          below.
        </p>
        <div className="flex flex-col items-center mt-10">
          <Button
            children="Back to Homepage"
            className="text-custom-white text-md lg:text-xl"
            onClick={handleRedirect}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
