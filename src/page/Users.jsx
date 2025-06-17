import React from "react";
import SectiontPage from "../components/SectiontPage";
import TabelcontenerCus from "../components/TabelcontenerCus";
import Compelxpagination from "../components/Complexpagintion";
import { redirect } from "react-router";
import { toast } from "sonner";
import { customFetch } from "../Util";
// eslint-disable-next-line react-refresh/only-export-components
export const loder = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect("/Login");
  }
  try {
    const respones = await customFetch.get("/admin/users?role=admin", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const customer = respones.data.data;
    const meta = respones.data;
    return { customer, meta };
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
function Users() {
  return (
    <>
      <SectiontPage titel={"Users"} />
      <TabelcontenerCus role={"Admin"} />
      <Compelxpagination />
    </>
  );
}

export default Users;
