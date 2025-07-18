import React from "react";
import ProductT from "./ProductT";
import EmptyProduct from "./EmptyProduct";
import { Form, Link, useLoaderData } from "react-router";
import { IoIosAdd } from "react-icons/io";

function ContenerTaeble() {
  const { product } = useLoaderData();
  if (product.length == 0) {
    return <EmptyProduct titel={'Products'} />;
  }
  return (
    <>
      <div className=" p-5 dark:border-gray-800 overflow-hidden sm:p-6">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex flex-col gap-5 px-6 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Products
              </h3>
            </div>
            <div className="flex flex-col   gap-3 sm:flex-row sm:items-center">
              <Link
                to="/Addproduct"
                className="Add flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700   dark:bg-white/[0.03] dark:text-gray-200"
              >
                <IoIosAdd className="" />
                Add Product
              </Link>
            </div>
          </div>
          {/* ///theis table */}
          <div className="max-w-full overflow-x-auto custom-scrollbar">
            <table className="min-w-full">
              <thead className="border-gray-100 border-y dark:border-gray-800">
                <tr>
                  <th className="px-6 py-3 whitespace-nowrap ">
                    <div className="flex items-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        Products
                      </p>
                    </div>
                  </th>
                  <th className="px-6 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        Category
                      </p>
                    </div>
                  </th>
                  <th className="px-6 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        Price
                      </p>
                    </div>
                  </th>
                  <th className="px-6 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        Data
                      </p>
                    </div>
                  </th>
                  <th className="px-6 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        Status
                      </p>
                    </div>
                  </th>
                  <th className="px-6 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        Action
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="py-3 divide-y divide-gray-100 dark:divide-gray-800">
                {product.map((item) => {
                  return <ProductT key={item.id} item={item} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContenerTaeble;
