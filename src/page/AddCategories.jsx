import { Form, redirect } from "react-router";
import AddCatoge from "../components/AddCatoge";
import SectiontPage from "../components/SectiontPage";
import BoutnsForms from "../components/BoutnsForms";
import Addimg from "../components/Addimg";
import { seterrorsmasge, clearerrors } from "../features/Util/utilSlice";
import { customFetch } from "../Util";
import Updatimg from "../components/Updatimg";
import AddImgCatog from "../components/AddImgCatog";
import { toast } from "sonner";

// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const Data = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    if (!user) {
      return redirect("/Login");
    }
    try {
      store.dispatch(clearerrors());
      const respones = await customFetch.post(
        "/admin/categories",
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
      toast.success(`success Add categorie Id ${respones.data.id}`);
      return redirect("/Categories");
    } catch (error) {
      if (error.response.status == 401) return redirect("/Login");
      store.dispatch(seterrorsmasge(error.response.data.errors));
      toast.error(error.response.data.message);
    }
  };
function AddCategories() {
  return (
    <>
      <SectiontPage titel={"Add Categories"} />
      <Form method="POST" encType="multipart/form-data">
        <AddCatoge />
        <AddImgCatog />
        <BoutnsForms redirecte={"Categories"} />
      </Form>
    </>
  );
}
export default AddCategories;
