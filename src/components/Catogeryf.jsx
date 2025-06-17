import React from "react";
import { Form, Link, useLoaderData } from "react-router";
import { IoIosAdd } from "react-icons/io";
import { useSelector } from "react-redux";
function Catogeryf() {
  const errorse = useSelector((state) => state.utilState.error);
  const { Categories } = useLoaderData();
  return (
    <>
      <div className="rounded-2xl border border-gray-200 bg-white px-2 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
        <div className="px-5 py-1 sm:px-6 sm:py-2">
          <h3 className="text-base m-0 font-medium text-gray-800 dark:text-white/90">
            Product Details
          </h3>
        </div>
        <div className="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
          <div>
            <div className="w-full px-3 ">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Select Categories
              </label>
              <div
                x-data="{ isOptionSelected: true }"
                className="relative z-20 bg-transparent"
              >
                <select
                  name="category_id"
                  className="dark:bg-dark-900 z-20 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                >
                  {Categories.map((item) => {
                    return (
                      <option
                        className="text-gray-500 dark:bg-gray-900 dark:text-gray-400"
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <span className="absolute z-30 text-gray-500 -translate-y-1/2 right-4 top-1/2 dark:text-gray-400">
                  <svg
                    className="stroke-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                      stroke=""
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </div>
              {errorse.category != null ? (
                <span className="text-sm text-error/75 ">
                  {errorse.category[0]}
                </span>
              ) : (
                <span className="mx-auto mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">
                  Add product to a category.
                </span>
              )}
              <div className="flex flex-col  py-5  gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/AddCategories"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-[11px] text-sm font-medium text-gray-700 shadow-theme-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:w-auto"
                >
                  <IoIosAdd className="dark:text-white" />
                  Add New category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catogeryf;
