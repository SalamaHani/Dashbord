import React from "react";
import Addimg from "../components/Addimg";
import BoutnsForms from "../components/BoutnsForms";
import Catogeryf from "../components/Catogeryf";
import FromAdd from "../components/FromAdd";
import Priceproduct from "../components/Priceproduct";
import { customFetch } from "../Util";
import { Form, redirect } from "react-router";
import SectiontPage from "../components/SectiontPage";
import Updatimg from "../components/Updatimg";
import FormUpdat from "../components/FormUpdat";
import PriceUpdet from "../components/PriceUpdet";
import Updatctoc from "../components/Updatctoc";
import { toast } from "sonner";
import { seterrorsmasge } from "../features/Util/utilSlice";

// const getproductquery = (id, user) => {
//   return {
//     querykey: ["products", id],
//     queryFn: () =>
//       customFetch.get(`/admin/products/${id}`, {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       }),
//   };
// };

// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (store) =>
  async ({ params }) => {
    const user = store.getState().userState.user;
    if (!user) return redirect("/Login");
    try {
      const reponesprduct = await customFetch.get(
        `/admin/products/${params.IDproduct}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const responescategories = await customFetch.get("/admin/categories", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return {
        product: reponesprduct.data,
        Categories: responescategories.data.data,
      };
    } catch (error) {
      console.log(error);
    }
  };
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request, params }) => {
    const user = store.getState().userState.user;
    if (!user) {
      return redirect("/Login");
    }
    const formData = await request.formData();
    const Data = Object.fromEntries(formData);
    try {
      const responer = await customFetch.post(
        `/admin/products/${params.IDproduct}`,
        {
          ...Data,
          _method: "PUT",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success(`Eidt Product id ${responer.data.id} success `);
      return redirect("/Products");
    } catch (error) {
      if (error.response.status == 422) {
        console.log(error.response.data.errors);
        store.dispatch(seterrorsmasge(error.response.data.errors));
      }
      toast.error(error.response.data.message);
    }
  };
function Editproduct() {
  return (
    <>
      <SectiontPage titel={"Edit Product"} />
      <Form
        method="post"
        encType="multipart/form-data"
        className="grid grid-cols-12 gap-4 md:gap-6"
      >
        <div className="col-span-12 space-y-6 xl:col-span-4">
          <Updatimg />
          <Updatctoc />
        </div>
        <FormUpdat />
        <PriceUpdet />
        <BoutnsForms redirecte={"Products"} />
      </Form>
    </>
  );
}

export default Editproduct;
