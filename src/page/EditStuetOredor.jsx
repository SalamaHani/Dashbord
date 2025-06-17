import React from "react";
import SectiontPage from "../components/SectiontPage";
import BoutnsForms from "../components/BoutnsForms";
import StuteEdiet from "../components/StuteEdiet";
import { redirect } from "react-router";
import { customFetch } from "../Util";
import { toast } from "sonner";
import { Form } from "react-router";
import SlestStute from "../components/SlestStute";
import UserDataOrder from "../components/UserDataOrder";
// const getStuetsOrderquery = (id, user) => {
//   return {
//     querykey: ["Customers", id],
//     queryFn: () =>
//       customFetch.get(`admin/orders/${id}`, {
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
      const respones = await customFetch.get(
        `admin/orders/${params.IDCustomersOrder}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return respones.data;
    } catch (error) {
      toast.error(error.response.data.message);
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
    console.log(Data);
    try {
      const responer = await customFetch.patch(
        `/admin/orders/${params.IDCustomersOrder}/status`,
        {
          ...Data,
        },
        {
          headers: {
            "Content-Type": "multipart/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success(`Eidt status order id ${responer.data.order.id} success `);
      return redirect("/CustomersOrder");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
function EditStuetOredor() {
  return (
    <>
      <SectiontPage titel={"Edit Ordor"} />
      <Form method="patch" className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-4">
          <SlestStute />
        </div>
        <UserDataOrder />
        <StuteEdiet />
        <BoutnsForms redirecte={"CustomersOrder"} />
      </Form>
    </>
  );
}

export default EditStuetOredor;
