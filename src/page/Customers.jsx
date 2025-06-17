import SectiontPage from "../components/SectiontPage";
import Compelxpagination from "../components/Complexpagintion";
import TabelcontenerCus from "../components/TabelcontenerCus";
import { customFetch } from "../Util";
import { redirect } from "react-router";
import { toast } from "sonner";
// const GetCustemuerQueryClinet = (user) => {
//   return {
//     queryKey: ["Customers"],
//     queryFn: () =>
//       customFetch("/admin/users?role=customer", {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       }),
//   };
// };
// eslint-disable-next-line react-refresh/only-export-components
export const loder = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect("/Login");
  }
  try {
    const respones = await customFetch("/admin/users?role=customer", {
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
function Customers() {
  return (
    <>
      <SectiontPage titel={"Customers"} />
      <TabelcontenerCus role={"Customer"} />
      <Compelxpagination />
    </>
  );
}
export default Customers;
