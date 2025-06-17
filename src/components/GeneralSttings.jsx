import React from "react";

function GeneralSttings() {
  return (
    <>
      <div className="col-span-12 space-y-6 xl:col-span-12">
        <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
          <div className="p-5 space-y-6 border-t border-gray-100 dark:border-gray-800 sm:p-6">
            <div className="-mx-2.5 flex flex-wrap gap-y-5">
              <div className="w-full px-2.5 xl:w-1/2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Meta Title
                </label>
                <input
                  type="text"
                  name="Meta_Title"
                  placeholder="Enter Meta Title"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
              </div>
              <div className="w-full px-2.5 xl:w-1/2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Meta Keywords
                </label>
                <input
                  type="text"
                  name="Meta_Keywords"
                  placeholder="Enter Meta Keywords"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  fdprocessedid="6zzl8u"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap mt-10">
              <div className=" w-full px-2.5 xl:w-1/2 ">
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Theme
                </label>
                <div
                  x-data="{ isOptionSelected: true }"
                  className="relative z-20 bg-transparent"
                >
                  <select
                    name="tax"
                    className="dark:bg-dark-900 z-20 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  >
                    <option
                      className="text-gray-500 dark:bg-gray-900 dark:text-gray-400"
                      value="Tex Free"
                    >
                      Dark
                    </option>
                    <option
                      value="Taxable Goods"
                      className="text-gray-500 dark:bg-gray-900 dark:text-gray-400"
                      defaultChecked
                    >
                      Global Laghit
                    </option>
                    <option
                      value="Downloadable Product"
                      className="text-gray-500 dark:bg-gray-900 dark:text-gray-400"
                    >
                      Default
                    </option>
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
                <span className="text-sm text-gray-400 ">
                  Set the product tax class.
                </span>
              </div>
              <div className="w-full px-2.5 xl:w-1/2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Default Layout
                </label>
                <input
                  name="vat"
                  type="text"
                  defaultValue="35"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  fdprocessedid="4xk7ep"
                />
                <span className="text-sm text-gray-400 ">
                  Set the product VAT about.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralSttings;
