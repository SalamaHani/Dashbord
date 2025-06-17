import SectiontPage from "../components/SectiontPage";
import { Form } from "react-router";
import BoutnsForms from "../components/BoutnsForms";
import FormUser from "../components/FormUser";
import { customFetch } from "../Util";
import { redirect } from "react-router";
import { toast } from "sonner";
import { setroleUser } from "../features/User/userSlice";
import { seterrorsmasge } from "../features/Util/utilSlice";
import { useSelector } from "react-redux";
// const getproductquery = (id, user) => {
//   return {
//     querykey: ["Customers", id],
//     queryFn: () =>
//       customFetch.get(`admin/users/${id}`, {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       }),
//   };
// };
// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (queryClient, store) =>
  async ({ params }) => {
    const user = store.getState().userState.user;
    if (!user) return redirect("/Login");
    console.log(params.IDuser);

    // const respones = await queryClient.ensureQueryData(
    //   getproductquery(params.IDcustomer, user)
    // );
    try {
      const respones = await customFetch.get(`admin/users/${params.IDuser}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      store.dispatch(setroleUser(respones.data.role));
      return respones.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (queryClient, store) =>
  async ({ request, params }) => {
    const user = store.getState().userState.user;
    if (!user) {
      return redirect("/Login");
    }
    const formData = await request.formData();
    const Data = Object.fromEntries(formData);
    const social_links = {};
    social_links.facebook = Data.facebook ?? "";
    social_links.linkedin = Data.linkedin ?? "";
    social_links.twitter = Data.twitter ?? "";
    social_links.instagram = Data.instagram ?? "";
    Data.social_links = social_links;
    try {
      const responer = await customFetch.post(
        `/admin/users/${params.IDuser}`,
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
      toast.success(`Eidt Custamer id ${responer.data.user.id} success `);
      queryClient.removeQueries({ queryKey: ["Customers"] });
      if (responer.data.user.role == "customer") return redirect("/Customers");
      else return redirect("/Users");
    } catch (error) {
      if (error.response.status == 422) {
        console.log(error.response.data.errors);
        store.dispatch(seterrorsmasge(error.response.data.errors));
      }
      toast.error(error.response.data.message);
    }
  };
function EditCustomer() {
  const roleUser = useSelector((state) => state.userState.roleuser);
  return (
    <>
      <SectiontPage titel={"Edit User "} />
      <Form
        method="POST"
        encType="multipart/form-data"
        className="grid grid-cols-12 gap-4 md:gap-6"
      >
        <FormUser />
        <BoutnsForms redirecte={roleUser} />
      </Form>
    </>
  );
}

export default EditCustomer;
