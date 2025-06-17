import React from "react";
import FormAouthR from "../../components/FormAouthR";
import LogoAouth from "../../components/LogoAouth";
import Togelthemes from "../../components/Togelthemes";
import { Form, redirect } from "react-router";
import { customFetch } from "../../Util";
import { toast } from "react-toastify";
import { seterrorsmasge, clearerrors } from "../../features/Util/utilSlice";
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const Data = Object.fromEntries(formData);
    Data.append("name", Data.fname + "" + Data.lname);
    try {
      store.dispatch(clearerrors());
      const respones = await customFetch.post("api/register", Data);
      console.log(respones);
      toast.success("is success Register");
      return redirect("/Login");
    } catch (error) {
      store.dispatch(seterrorsmasge(error.response.data.errors));
    }
  };
function Regester() {
  return (
    <>
      <Form
        method="POST"
        className="relative p-6 bg-white z-1 h-full dark:bg-gray-900 sm:p-0"
      >
        <div className="relative flex flex-col justify-center w-full h-screen dark:bg-gray-900 sm:p-0 lg:flex-row">
          <FormAouthR />
          <LogoAouth />
          <Togelthemes />
        </div>
      </Form>
    </>
  );
}

export default Regester;
