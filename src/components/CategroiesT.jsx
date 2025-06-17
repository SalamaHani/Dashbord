import React from "react";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, Form } from "react-router";
import { redirect } from "react-router";
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
        `/admin/categories/${params.IDproduct}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success(`Delete categories is ID ${respones.data.id} `);
      return redirect("/categories");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
function CategroiesT({ item }) {
  const { name, id, updated_at, thumbnail } = item;
  const date = dayjs(updated_at).format(" MMM Do, YYYY");
  return (
    <>
      <tr>
        <td className="px-6 py-3 whitespace-nowrap ">
          <div className="flex items-center">
            <p className="text-gray-500 text-theme-sm dark:text-gray-400">
              ID213{id}
            </p>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap ">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              {thumbnail != null ? (
                <div className="h-[50px] w-[50px]  overflow-hidden rounded-md">
                  <img src={thumbnail} alt="Product" />{" "}
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
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <span className="text-gray-700 text-theme-sm dark:text-gray-400">
              {date}
            </span>
          </div>
        </td>
        <td className="px-6">
          {/* ///Delet Prooduct */}
          <div className="flex w-14 items-center justify-between">
            <div className="w-8 h-8 rounded-full  bg-error/50 flex  items-center justify-center">
              <Form
                className=" flex items-center justify-between cursor-pointer"
                method="delete"
                action={`/categories/${id}/Delete`}
              >
                <button type="submit">
                  <RiDeleteBin6Line className="dark:text-white text-theme-xs  text-xl" />
                </button>
              </Form>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default CategroiesT;
