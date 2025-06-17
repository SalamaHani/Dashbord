import Addimg from "../components/Addimg";
import BoutnsForms from "../components/BoutnsForms";
import Catogeryf from "../components/Catogeryf";
import FromAdd from "../components/FromAdd";
import Priceproduct from "../components/Priceproduct";
import { customFetch } from "../Util";
import { Form } from "react-router";
import { seterrorsmasge, clearerrors } from "../features/Util/utilSlice";
import SectiontPage from "../components/SectiontPage";
import { redirect } from "react-router";
import { toast } from "sonner";
const url = "/admin/categories";

const AddqueryCatogiry = () => {
  return {
    querykey: ["categories"],
    queryFn: () => customFetch.get(url),
  };
};
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
    if (!Data.shipping) {
      Data.shipping = 0;
    }
    if (!Data.is_active) {
      Data.is_active = 0;
    }
    try {
      store.dispatch(clearerrors());
      const respose = await customFetch.post(
        "/admin/products",
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
      toast.success(`success Add Product is ID${respose.data.name}`);
      return redirect("/Products");
    } catch (error) {
      if (error.response.status == 422) {
        console.log(error.response.data.errors);
        store.dispatch(seterrorsmasge(error.response.data.errors));
      }
      toast.error(error.response.data.message);
    }
  };
// eslint-disable-next-line react-refresh/only-export-components
export const loder = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect("/Login");
  }
  try {
    const respones = await customFetch.get(url, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    console.log(respones.data.data);
    return { Categories: respones.data.data };
  } catch (error) {
    if (error.response.status == 401) return redirect("/Login");
  }
};
function Addproduct() {
  return (
    <>
      <SectiontPage titel={"Add Product"} />
      <Form
        method="POST"
        encType="multipart/form-data"
        className="grid grid-cols-12 gap-4 md:gap-6"
      >
        <Addimg />
        <FromAdd />
        <Priceproduct />
        <BoutnsForms redirecte={"Products"} />
      </Form>
    </>
  );
}
export default Addproduct;
