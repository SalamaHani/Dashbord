import { useSelector } from "react-redux";
import { useState } from "react";
import { useLoaderData } from "react-router";
function FormUpdat() {
  const { product } = useLoaderData();
  const { name, slug, description, brand, is_active, shipping } = product;
  const errorse = useSelector((state) => state.utilState.error);
  const [chvalue, setChvalue] = useState(shipping ? 1 : 0);
  const [chactiv, setchacactiv] = useState(is_active ? 1 : 0);
  const handelchange = (e) => {
    if (e.target.checked) setChvalue(1);
    else setChvalue(0);
  };
  const handelchangeactiv = (e) => {
    if (e.target.checked) setchacactiv(1);
    else setchacactiv(0);
  };
  return (
    <div className="col-span-12 space-y-6 xl:col-span-8">
      <div className="rounded-2xl border border-gray-200 bg-white px-5  pt-5 pb-0 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
        <div className="px-5 py-4 sm:px-6 sm:py-5">
          <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
            General
          </h3>
        </div>
        <div className="p-5 space-y-6 border-t border-gray-100 dark:border-gray-800 sm:p-6">
          <div className="-mx-2.5 flex flex-wrap gap-y-5">
            
            <div className="w-full px-2.5 ">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter Name Product"
                defaultValue={name}
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
                  A product name is required and recommended to be unique
                </span>
              )}
            </div>

            <div className="w-full px-2.5 ">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                SKU
              </label>
              <input
                defaultValue={slug}
                type="text"
                name="sku"
                placeholder="Enter SKU"
                className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
              />
              {errorse.sku != null ? (
                <span className="text-sm text-error/75 ">{errorse.sku[0]}</span>
              ) : (
                <span className="text-sm text-gray-400">
                  Enter the product SKU.
                </span>
              )}
            </div>

            <div className="w-full px-2.5">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Barcode
              </label>
              <input
                defaultValue={brand}
                type="text"
                name="brand"
                placeholder="Enter Barcode"
                className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                fdprocessedid="4xk7ep"
              />
              {errorse.brand != null ? (
                <span className="text-sm text-error/75 ">
                  {errorse.brand[0]}
                </span>
              ) : (
                <span className="text-sm text-gray-400">
                  Enter the product barcode number.e
                </span>
              )}
            </div>

            <div className="w-full px-2.5">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Description
              </label>
              <textarea
                defaultValue={description}
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
            <div className="shipping w-full px-2.5 xl:w-1/2">
              <label
                for="checkboxLabelOne"
                className="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"
              >
                <input
                  name="shipping"
                  type="checkbox"
                  value={chvalue}
                  checked={chvalue == 0 ? false : true}
                  className="checkbox mr-3 checkbox-neutral"
                  onChange={handelchange}
                />
                Free Shipping
              </label>
              {errorse.shipping != null ? (
                <span className="text-sm text-error/75 ">
                  {errorse.shipping[0]}
                </span>
              ) : (
                <span className="text-sm text-gray-400">
                  Set Free Shipping.
                </span>
              )}
            </div>
            <div className="isActiv w-full px-2.5 xl:w-1/2">
              <label
                for="checkboxLabelOne"
                className="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"
              >
                <input
                  name="is_active"
                  type="checkbox"
                  value={chactiv}
                  checked={chactiv == 1 ? true : false}
                  className="checkbox mr-3 checkbox-neutral"
                  onChange={handelchangeactiv}
                />
                is Active
              </label>
              {errorse.is_active != null ? (
                <span className="text-sm text-error/75 ">
                  {errorse.is_active[0]}
                </span>
              ) : (
                <span className="text-sm text-gray-400">Set is Active</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormUpdat;
