import React from "react";
import { useLoaderData } from "react-router";

function UserDataOrder() {
  const data = useLoaderData();
  const { address, customer_name, user } = data;
  const { name, email, street_address, city, country, phone } = user;
  return (
    <>
      <div className="col-span-12 space-y-6 xl:col-span-8">
        <div className="rounded-2xl border border-gray-200 bg-white px-5  pt-5 pb-0 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
          <div className="px-5 sm:px-3 sm:py-3">
            <h4 className="text-base font-medium text-gray-800 dark:text-white/90">
              Customer Data Details
            </h4>
          </div>
          <div className="p-1 space-y-1 border-t border-gray-100 dark:border-gray-800 sm:p-6">
            <div className="-mx-2.5 flex  flex-wrap xl:flex-nowrap  w-full justify-between gap-5">
              <div class="p-5 mb-6 border w-[100%] xl:w-[50%] border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
                <div>
                  <div>
                    <h5 class="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
                      Shopping Order Details
                    </h5>
                    <div class="grid grid-cols-1 gap-1 lg:grid-cols-1 lg:gap-3 2xl:gap-x-32">
                      <span class=" text-xs leading-normal mb-0 text-gray-500 dark:text-gray-400">
                        Name: {customer_name}
                      </span>
                      <span class=" text-xs leading-normal text-gray-500 dark:text-gray-400">
                        Street Address: {street_address}
                      </span>
                      <span class=" text-xs leading-normal text-gray-500 dark:text-gray-400">
                        phone: {phone}
                      </span>
                      <span class=" text-xs leading-normal text-gray-500 dark:text-gray-400">
                        Address: {address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-5 mb-6 border w-[100%] xl:w-[50%] border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
                <div>
                  <div>
                    <h5 class="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
                      Customer Details
                    </h5>
                    <div class="grid grid-cols-1 gap-1 lg:grid-cols-1 lg:gap-3 2xl:gap-x-32">
                      <span class=" text-xs leading-normal mb-0 text-gray-500 dark:text-gray-400">
                        Name: {name}
                      </span>
                      <span class=" text-xs leading-normal text-gray-500 dark:text-gray-400">
                        Email: {email}
                      </span>
                      <span class=" text-xs leading-normal text-gray-500 dark:text-gray-400">
                        Address: {country}/{city}
                      </span>

                      <span class=" text-xs leading-normal text-gray-500 dark:text-gray-400">
                        Phone: {phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDataOrder;
