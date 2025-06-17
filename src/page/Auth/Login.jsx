import React from "react";
import FormAouth from "../../components/FormAouth";
import LogoAouth from "../../components/LogoAouth";
import Togelthemes from "../../components/Togelthemes";

function Login() {
  return (
    <>
      <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
        <div className="relative flex flex-col justify-center w-full h-screen dark:bg-gray-900 sm:p-0 lg:flex-row">
          <FormAouth />
          <LogoAouth />
          <Togelthemes />
        </div>
      </div>
    </>
  );
}

export default Login;
