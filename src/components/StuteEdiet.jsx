// import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ProdctsSlect from "./ProdctsSlect";
import { formatPrice } from "../Util";
// import day from "dayjs";
import dayjs from "dayjs";

import advancedFormat from "dayjs/plugin/advancedFormat";
screenTop;
dayjs.extend(advancedFormat);
function StuteEdiet() {
  const productitems = useLoaderData();
  // const [newpervistasu, setnewpervistasu] = useState("");
  // const handelnewstatus = (stuats) => {
  //   setnewpervistasu(stuats);
  // };

  const { items, total, status_histories } = productitems;
  const staus = [
    { id: 1, states: "delivered", color: "bg-success/20 text-success/100" },
    { id: 2, states: "shipped", color: "bg-error/20 text-error/100" },
    { id: 3, states: "processing", color: "bg-primary/20 text-primary/100" },
    { id: 4, states: "pending", color: "bg-warning/20 text-warning/100" },
  ];
  return (
    <>
      <div className="col-span-12 space-y-12 xl:col-span-12">
        <div className="rounded-2xl border border-gray-200 bg-white px-5  pt-5 pb-0 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
          <div className="px-5 py-4 sm:px-6 sm:py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              Select Products
            </h3>
          </div>
          <div className="p-5 space-y-6 border-t border-gray-100 dark:border-gray-800 sm:p-6">
            <div className="-mx-2.5 flex flex-wrap w-full justify-start gap-6">
              {items.map((item) => {
                return (
                  <>
                    <ProdctsSlect key={item.id} item={item} />
                  </>
                );
              })}
            </div>
            <div className="border-t p-0 border-gray-100 dark:border-gray-800 ">
              <h4 className="text-base font-medium text-gray-800  dark:text-gray-400 pt-3">
                Total Cost: <span>{formatPrice(total)}</span>
              </h4>
              <div className="border-t border-gray-100 dark:border-gray-800 pt-5">
                <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                  Status Histories
                </h3>
                <div className=" items-center -mx-2.5 flex flex-wrap w-full justify-start gap-6">
                  {status_histories.map((items) => {
                    const date = dayjs(items.updated_at).format(
                      "hh:mm a - MMM Do, YYYY"
                    );
                    return (
                      <>
                        {staus.map((item) => {
                          if (item.states == items.old_status) {
                            return (
                              <>
                                <div
                                  key={item.id}
                                  className={`card bg-white dark:bg-gray-800  card-side  w-56 h-37  dark:text-gray-400 shadow-xl`}
                                >
                                  <div className="card-body p-3">
                                    <span class=" text-xs leading-normal mb-0 text-gray-500 dark:text-gray-400">
                                      Changer Name: {items.changer.name}
                                    </span>
                                    <div>
                                      <span className=" text-xs leading-normal mb-0 text-gray-500 dark:text-gray-400">
                                        Old Status:
                                      </span>
                                      <span
                                        className={`${item.color} ml-3  text-success-600 dark:bg-success/500/15 text-xs me-2 px-1 py-1   rounded-sm font-medium`}
                                      >
                                        {items.old_status}
                                      </span>
                                    </div>
                                    {staus.map((item) => {
                                      if (item.states == items.new_status) {
                                        return (
                                          <>
                                            <div>
                                              <span className=" text-xs leading-normal mb-0 text-gray-500 dark:text-gray-400">
                                                New Status:
                                              </span>
                                              <span
                                                className={`${item.color} ml-3 text-success-600 dark:bg-success/500/15 text-xs me-2 px-1 py-1  rounded-sm font-medium`}
                                              >
                                                {items.new_status}
                                              </span>
                                            </div>
                                          </>
                                        );
                                      }
                                    })}
                                    <span className=" text-xs leading-normal mb-0 text-gray-500 dark:text-gray-400">
                                      {date}
                                    </span>
                                  </div>
                                </div>
                              </>
                            );
                          }
                        })}
                      </>
                    );
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

export default StuteEdiet;
