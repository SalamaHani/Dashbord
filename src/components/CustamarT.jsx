import React from "react";
import { setstring } from "../Util";
import dayjs from "dayjs";
import { Link } from "react-router";
import { CiEdit } from "react-icons/ci";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { RiDeleteBin6Line } from "react-icons/ri";
import { customFetch } from "../Util";
import { redirect } from "react-router";
import { Form } from "react-router";
import { toast } from "sonner";
screenTop;
dayjs.extend(advancedFormat);
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ params }) => {
    const user = store.getState().userState.user;
    try {
      const respones = await customFetch.delete(
        `/admin/users/${params.IDuser}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(respones);
      toast.success(`succes Dselete Customer ID ${params.IDuser}`);
      if (respones.data.user.role == "customer") return redirect("/Customers");
      else return redirect("/Users");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
function CustamarT({ item }) {
  const { id, name, photo, email, country, phone, updated_at } = item;
  const date = dayjs(updated_at).format("MMM Do, YYYY");
  return (
    <>
      <tr>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <div x-data="{checked: false}" className="flex items-center gap-3">
              <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1.25px] bg-white dark:bg-white/0 border-gray-300 dark:border-gray-700">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden"
                >
                  <path
                    d="M11.6668 3.5L5.25016 9.91667L2.3335 7"
                    stroke="white"
                    stroke-width="1.94437"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                  ID198{id}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              {photo && photo != null ? (
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100">
                  <img
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100"
                    src={photo ?? ""}
                    alt="user"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 flex items-center justify-center   overflow-hidden  bg-gray-600 border-gray-200 rounded-full dark:border-gray-800">
                  <span>{setstring(name ?? "")}</span>
                </div>
              )}
              <div>
                <span className="text-xs mb-0.5 block font-medium text-gray-700 dark:text-gray-400">
                  {name}
                </span>
                <span className="text-gray-500  text-xs dark:text-gray-400">
                  {email}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <p className="text-gray-700 text-theme-sm dark:text-gray-400">
              {phone}
            </p>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <p className="text-gray-700 text-theme-sm dark:text-gray-400">
              {date}
            </p>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <p className="text-gray-700 text-theme-sm dark:text-gray-400">
              {country}
            </p>
          </div>
        </td>
        <td className="px-6">
          {/* ///Delet Prooduct */}
          <div className="flex w-14 items-center justify-between">
            <Link
              to={`/User/${id}`}
              className="w-6 h-6 cursor-pointer rounded-full bg-warning/50 flex items-center justify-center"
            >
              <CiEdit className="dark:text-white text-theme-xs text-success-600 text-sm " />
            </Link>
            <div className="w-6 h-6 rounded-full cursor-pointer bg-error/50 flex  items-center justify-center">
              <Form method="delete" action={`/User/${id}/Delete`}>
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

export default CustamarT;
