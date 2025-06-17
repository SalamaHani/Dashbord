import { QueryClient } from "@tanstack/react-query";
import ContenetPagination from "../components/ContenerPangtion";
import ContenerTaeble from "../components/ContenerTaeble";
import { customFetch } from "../Util";
import SectiontPage from "../components/SectiontPage";
import { Outlet, redirect } from "react-router";
import Compelxpagination from "../components/Complexpagintion";

const url = "/admin/products";
const Allproductquery = (queryParams) => {
  const { search, page } = queryParams;
  return {
    querykey: ["products", search ?? "", page ?? 1],
    queryFn: () => {
      return customFetch(url, {
        prams: queryParams,
      });
    },
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
      const respone = await customFetch(url, {
        params: paramse,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const product = respone.data.data;
      const meta = respone.data;
      return { product, meta, paramse };
    } catch (error) {
      if (error.response.status == 401) return redirect("/Login");
    }
  };
function Products() {
  return (
    <>
      <SectiontPage titel={"Products"} />
      <ContenerTaeble />
      <Compelxpagination />
      <Outlet />
    </>
  );
}
export default Products;
