import Compelxpagination from "../components/Complexpagintion";
import ContenerTeablC from "../components/ContenerTeablC";
import SectiontPage from "../components/SectiontPage";

import { redirect } from "react-router";
import { customFetch } from "../Util";
import { toast } from "sonner";
import { QueryClient } from "@tanstack/react-query";
const url = "/admin/categories";
// const GetAllcaotegeyQuery = (user) => {
//   return {
//     querykey: ["categories"],
//     queryFn: () =>
//       customFetch.get(url, {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       }),
//   };
// };
// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (queryClient, store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      return redirect("/Login");
    }
    try {
      const responescategories = await customFetch.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      // const respones = await queryClient.ensureQueryData(
      //   GetAllcaotegeyQuery(user)
      // );
      console.log(request);
      return {
        Categories: responescategories.data.data,
        meta: responescategories.data,
      };
    } catch (error) {
      if (error.response.status == 401) {
        toast.error("is login");
        return redirect("/Login");
      } else console.log(error.response);
      console.log(error);
    }
  };
function Categories() {
  return (
    <>
      <SectiontPage titel={"Categories"} />
      <ContenerTeablC />
      <Compelxpagination />
    </>
  );
}
export default Categories;
