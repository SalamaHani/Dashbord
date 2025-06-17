export default function StoreSettings() {
  return (
    <>
      <div className="col-span-12 space-y-6 xl:col-span-12">
        <div className="rounded-2xl border border-gray-200 bg-white px-5  pt-5 pb-0 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
          <div className="p-5 space-y-6 border-t border-gray-100 dark:border-gray-800 sm:p-6">
            <div className="-mx-2.5  flex flex-wrap gap-y-5">
              <div className="w-full px-2.5 ">
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Store Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name Product"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  fdprocessedid="6zzl8u"
                  name="StoreName"
                />
              </div>

              <div className="w-full px-2.5 ">
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Store Owner
                </label>
                <input
                  type="text"
                  name="sku"
                  placeholder="Enter SKU"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
                <span className="text-sm text-gray-400 ">
                  Enter the product Store Owner
                </span>
              </div>

              <div className="w-full px-2.5">
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Address
                </label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Enter Barcode"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  fdprocessedid="4xk7ep"
                />
              </div>
              <div className="w-full px-2.5">
                <div className="w-full flex flex-wrap mt-10">
                  <div className="-mx-2.5 w-full flex flex-wrap gap-y-5">
                    <div className="w-full px-2.5 xl:w-1/2">
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Geocode
                      </label>
                      <input
                        type="number"
                        name="Geocode"
                        placeholder="Enter Geocode"
                        className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>
                    <div className="w-full px-2.5 xl:w-1/2">
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        fdprocessedid="6zzl8u"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap mt-10">
                  <div className="-mx-2.5 flex w-full flex-wrap gap-y-5">
                    <div className="w-full px-2.5 xl:w-1/2">
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Phone
                      </label>
                      <input
                        type="number"
                        name="Phone"
                        placeholder="Enter Phone"
                        className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>
                    <div className="w-full px-2.5 xl:w-1/2">
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Fax
                      </label>
                      <input
                        type="text"
                        name="Fax"
                        placeholder="Enter Fax"
                        className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        fdprocessedid="6zzl8u"
                      />
                    </div>
                  </div>
                </div>
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
              </div>
              <div className="shipping w-full px-2.5 xl:w-1/2">
                <label
                  for="checkboxLabelOne"
                  className="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"
                >
                  <input
                    name="shipping"
                    type="checkbox"
                    className="checkbox mr-3 checkbox-neutral"
                  />
                  Free Shipping
                </label>
              </div>
              <div className="isActiv w-full px-2.5 xl:w-1/2">
                <label
                  for="checkboxLabelOne"
                  className="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"
                >
                  <input
                    name="is_active"
                    type="checkbox"
                    className="checkbox mr-3 checkbox-neutral"
                  />
                  is Active
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
