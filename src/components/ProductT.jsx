import React from "react";
import { formatPrice } from "../Util";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, Form, redirect } from "react-router";
import { customFetch } from "../Util";
import { toast } from "react-toastify";

screenTop;
dayjs.extend(advancedFormat);
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ params }) => {
    const user = store.getState().userState.user;
    try {
      const respones = await customFetch.delete(
        `/admin/products/${params.IDproduct}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(respones);
      toast.success(`success Delete Product ID ${params.IDproduct}`);
      return redirect("/Products");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
function ProductT({ item }) {
  const { name, id, price, is_active, image, updated_at, category } = item;
  // console.log(item.category.name);
  const date = dayjs(updated_at).format("MMM Do, YYYY");
  return (
    <>
      <tr>
        <td className="px-6 py-3 whitespace-nowrap ">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              {image != null ? (
                <div className="h-[50px] w-[50px]  overflow-hidden rounded-md">
                  <img src={image} alt="Product" />
                </div>
              ) : (
                ""
              )}
              <div className="flex flex-col">
                <span className="font-medium  text-gray-800 text-theme-sm dark:text-white/90">
                  {name}
                </span>
                <span className="text-gray-500 text-theme-xs text-xs dark:text-gray-400">
                  ID213{id}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap first:pl-0">
          <div className="flex items-center">
            <p className="text-gray-500 text-theme-sm dark:text-gray-400">
              {category?.name ?? ""}
            </p>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <span className="text-gray-700 text-theme-sm dark:text-gray-400">
              {formatPrice(price)}
            </span>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <span className="text-gray-700 text-theme-sm dark:text-gray-400">
              {date}
            </span>
          </div>
        </td>
        {is_active ? (
          <td className="px-6 py-3 whitespace-nowrap first:pl-0">
            <div className="flex items-center">
              <span className="bg-success/20 dark:text-white text-xs text-success-600 dark:bg-success/500/15 rounded-full px-2 py-0.5 font-medium">
                Active
              </span>
            </div>
          </td>
        ) : (
          <td className="px-6 py-3 whitespace-nowrap first:pl-0">
            <div className="flex items-center">
              <span className="bg-error/20 dark:text-white text-xs text-success-600 dark:bg-error/500/15 rounded-full px-2 py-0.5 font-medium">
                No Active
              </span>
            </div>
          </td>
        )}
        <td className="px-6">
          {/* ///Delet Prooduct */}
          <div className="flex w-14 items-center justify-between">
            <Link
              to={`/products/${id}`}
              className="w-6 h-6 cursor-pointer rounded-full bg-warning/50 flex items-center justify-center"
            >
              <CiEdit className="dark:text-white text-theme-xs text-success-600 text-sm " />
            </Link>
            <div className="w-6 h-6 rounded-full cursor-pointer bg-error/50 flex  items-center justify-center">
              <Form method="delete" action={`/products/${id}/Delete`}>
                <button type="submit">
                  <RiDeleteBin6Line className="dark:text-white text-theme-xs cursor-pointer text-sm" />
                </button>
              </Form>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default ProductT;
