import React from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { setstring } from "../Util";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router";
import { formatPrice } from "../Util";
screenTop;
dayjs.extend(advancedFormat);
function OrdorT({ item }) {
  const { id, user, address, total, status, updated_at } = item;
  const date = dayjs(updated_at).format("MMM Do, YYYY");
  const staus = [
    { id: 1, states: "delivered", color: "bg-success/20 text-success/100" },
    { id: 2, states: "shipped", color: "bg-error/20 text-error/100" },
    { id: 3, states: "processing", color: "bg-primary/20 text-primary/100" },
    { id: 4, states: "pending", color: "bg-warning/20 text-warning/100" },
  ];
  return (
    <tr>
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div x-data="{checked: false}" className="flex items-center gap-3">
            <div>
              <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                ID128{id}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            {user?.photo && user.photo != null ? (
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100">
                <img
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100"
                  src={user?.photo ?? ""}
                  alt="user"
                />
              </div>
            ) : (
              <div className="w-12 h-12 flex items-center justify-center   overflow-hidden  bg-gray-600 border-gray-200 rounded-full dark:border-gray-800">
                <span>{setstring(user?.name ?? "")}</span>
              </div>
            )}
            <div>
              <span className="text-xs mb-0.5 block font-medium text-gray-700 dark:text-gray-400">
                {user?.name ?? ""}
              </span>
              <span className="text-gray-500  text-xs dark:text-gray-400">
                {user?.email ?? ""}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center">
          {staus.map((item) => {
            if (item.states == status) {
              return (
                <span
                  key={item.id}
                  className={`${item.color} text-xs text-success-600 dark:bg-success/500/15 rounded-full px-2 py-0.5 font-medium`}
                >
                  {status}
                </span>
              );
            }
          })}
        </div>
      </td>
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <p className="text-gray-700 text-theme-sm dark:text-gray-400">
            {formatPrice(total)}
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
            {address}
          </p>
        </div>
      </td>
      <td className="px-6">
        {/* ///Delet Prooduct */}
        <div className="flex w-14 items-center justify-center">
          <Link
            to={`/CustomersOrder/${id}`}
            className="w-10 h-10 cursor-pointer rounded-full bg-warning/50 flex items-center justify-center"
          >
            <CiEdit className="dark:text-white text-theme-xs text-success-600 text-sm " />
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default OrdorT;
