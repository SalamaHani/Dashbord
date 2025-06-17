import React from "react";

import { useSelector } from "react-redux";
function AddCatoge() {
  const errorse = useSelector((state) => state.utilState.error);

  return (
    <div className="col-span-12 space-y-6 xl:col-span-8 mb-4">
      <div className="rounded-2xl border border-gray-200 bg-white px-5  pt-5 pb-0 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
        <div className="px-5 py-4 sm:px-6 sm:py-5">
          <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
            Add Category
          </h3>
        </div>
        <div className="p-5 space-y-6 border-t border-gray-100 dark:border-gray-800 sm:p-6">
          <div className="-mx-2.5 flex flex-wrap gap-y-5">
            <div className="w-full px-2.5 ">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Category Name
              </label>
              <input
                type="text"
                placeholder="Enter Name Product"
                className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                fdprocessedid="6zzl8u"
                name="name"
              />
              {errorse.name != null ? (
                <span className="text-sm text-error/75 ">
                  {errorse.name[0]}
                </span>
              ) : (
                <span className="text-sm text-gray-400">
                  A Category name is required and recommended to be unique
                </span>
              )}
            </div>
            <div className="w-full px-2.5 ">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Slug
              </label>
              <input
                type="text"
                placeholder="Enter Name slug"
                className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                fdprocessedid="6zzl8u"
                name="slug"
              />
              {errorse.slug != null ? (
                <span className="text-sm text-error/75 ">
                  {errorse.slug[0]}
                </span>
              ) : (
                <span className="text-sm text-gray-400">
                  A Slug is required and recommended to be unique
                </span>
              )}
            </div>

            <div className="w-full px-2.5 ">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Parent ID
              </label>
              <input
                type="text"
                name="parent_id"
                placeholder="Enter Parent ID"
                className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
              />
              <span className="text-sm text-gray-400 ">
                Enter the Parent ID Category.
              </span>
            </div>
            <div className="w-full px-2.5">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Type Enter text  Description "
                rows="6"
                className="dark:bg-dark-900 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
              ></textarea>
              {errorse.description != null ? (
                <span className="text-sm text-error/75 ">
                  {errorse.description[0]}
                </span>
              ) : (
                <span className="text-sm text-gray-400">
                  Set a description to the product for better visibility.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCatoge;
