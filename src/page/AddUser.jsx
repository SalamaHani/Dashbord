import React from "react";
import SectiontPage from "../components/SectiontPage";
import FormUser from "../components/FormUser";
import BoutnsForms from "../components/BoutnsForms";
import { Form } from "react-router";
import FormAddUser from "../components/FormAddUser";
import { seterrorsmasge, clearerrors } from "../features/Util/utilSlice";
import { redirect } from "react-router";
import { customFetch } from "../Util";
import { toast } from "sonner";
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      return redirect("/Login");
    }
    const formData = await request.formData();
    const Data = Object.fromEntries(formData);
    console.log(Data);
    try {
      store.dispatch(clearerrors());
      const respose = await customFetch.post(
        "/admin/users",
        {
          ...Data,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success(`success Add Product is ID${respose.data.user.id}`);
      if (respose.data.user.role == "customer") return redirect("/Customers");
      else return redirect("/Users");
    } catch (error) {
      if (error.response.status == 422) {
        console.log(error.response.data.errors);
        store.dispatch(seterrorsmasge(error.response.data.errors));
      }
      toast.error(error.response.data.message);
    }
  };
function AddUser() {
  return (
    <div>
      <SectiontPage titel={"Add Users"} />
      <Form
        method="POST"
        encType="multipart/form-data"
        className="grid grid-cols-12 gap-4 md:gap-6"
      >
        <FormAddUser />
        <BoutnsForms redirecte={"Users"} />
      </Form>
    </div>
  );
}
export default AddUser;
