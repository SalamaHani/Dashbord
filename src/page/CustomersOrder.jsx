import React from "react";
import SectiontPage from "../components/SectiontPage";
import Compelxpagination from "../components/Complexpagintion";
import { customFetch } from "../Util";
import { redirect } from "react-router";
import ContenerCusOrd from "../components/ContenerCusOrd";
import { toast } from "sonner";
const GetCustemuerOrderQueryClinet = (user) => {
  return {
    queryKey: ["Customers"],
    queryFn: () =>
      customFetch("/admin/orders", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};
// eslint-disable-next-line react-refresh/only-export-components
export const loder =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      return redirect("/Login");
    }
    try {
      const paramse = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);
      const respones = await customFetch("/admin/orders", {
        params: paramse,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const customerorder = respones.data.data;
      const meta = respones.data;
      return { customerorder, meta };
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
function CustomersOrder() {
  return (
    <>
      <SectiontPage titel={"Customers Order"} />
      <ContenerCusOrd />
      <Compelxpagination />
    </>
  );
}

export default CustomersOrder;
