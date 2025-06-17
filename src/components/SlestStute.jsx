import React from "react";
import { Link, useLoaderData } from "react-router";
import { IoIosAdd } from "react-icons/io";
function SlestStute() {
  const { status } = useLoaderData();
  console.log(status);
  const staus = [
    { id: 1, states: "delivered", color: "bg-success/20 text-success/100" },
    { id: 2, states: "shipped", color: "bg-error/20 text-error/100" },
    { id: 3, states: "processing", color: "bg-primary/20 text-primary/100" },
    { id: 4, states: "pending", color: "bg-warning/20 text-warning/100" },
  ];
  return (
    <>
      <div className="rounded-2xl border border-gray-200 bg-white px-2 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
        <div className="px-5 py-1 sm:px-6 sm:py-2">
          <h4 className="text-base m-0 font-medium text-gray-800 dark:text-white/90">
            Status Ordors Details
          </h4>
        </div>
        <div className="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
          <div>
            <div className="w-full px-3 ">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Select Status Ordors
              </label>
              <div
                x-data="{ isOptionSelected: true }"
                className="relative z-20 bg-transparent"
              >
                <select
                  name="status"
                  defaultValue={status}
                  className="dark:bg-dark-900 z-20 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                >
                  {staus.map((item) => {
                    return (
                      <option
                        className="text-gray-500 dark:bg-gray-900 dark:text-gray-400"
                        key={item.id}
                        value={item.states}
                      >
                        {item.states}
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
              <div className="flex flex-col  py-2 mt-23  gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center">
                  {staus.map((item) => {
                    if (item.states == status) {
                      return (
                        <>
                          <span className="text-black dark:text-gray-400">
                            Order Status:
                          </span>
                          <span
                            key={item.id}
                            className={`${item.color}  text-success-600 dark:bg-success/500/15 text-xs me-2 px-3.5 py-1.5 ml-3 rounded-sm font-medium`}
                          >
                            {status}
                          </span>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlestStute;
