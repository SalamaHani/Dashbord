import { useLoaderData, useNavigate, useLocation } from "react-router";
import CustamarT from "./CustamarT";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { FcShipped } from "react-icons/fc";
import styled from "styled-components";
import { MdPending } from "react-icons/md";
import { SiProcessingfoundation } from "react-icons/si";
import OrdorT from "./OrdorT";

function ContenerCusOrd() {
  const { customerorder } = useLoaderData();
  const { pathname, search } = useLocation();
  const Navgetpage = useNavigate();
  const handelNavgetePage = (stautsType) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("status", stautsType);
    Navgetpage(`${pathname}?${searchParams.toString()}`);
  };
  const addcalssnameActiv = (statusTayp) => {
    const searchParams = new URLSearchParams(search);
    return statusTayp == searchParams.toString();
  };

  return (
    <>
      <div className=" p-5 dark:border-gray-800 overflow-hidden sm:p-6">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex flex-col gap-5 px-6 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                <div class="inline-flex rounded-md shadow-xs" role="group">
                  <button
                    onClick={() => {
                      handelNavgetePage("All");
                    }}
                    type="button"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white  dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
                      addcalssnameActiv("status=All")
                        ? "bg-black text-white  dark:bg-gray-500"
                        : ""
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => {
                      handelNavgetePage("pending");
                    }}
                    type="button"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900  border-t border-b border-r border-gray-900 hover:bg-gray-900 hover:text-white  dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
                      addcalssnameActiv("status=pending")
                        ? "bg-black text-white  dark:bg-gray-500"
                        : ""
                    }`}
                  >
                    <MdPending className="mr-2" />
                    pending
                  </button>
                  <button
                    onClick={() => {
                      handelNavgetePage("processing");
                    }}
                    type="button"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900  border-t border-b border-r border-gray-900 hover:bg-gray-900 hover:text-white  dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
                      addcalssnameActiv("status=processing")
                        ? "bg-black text-white  dark:bg-gray-500"
                        : ""
                    }`}
                  >
                    <SiProcessingfoundation className="mr-2" />
                    processing
                  </button>
                  <button
                    onClick={() => {
                      handelNavgetePage("shipped");
                    }}
                    type="button"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900  border-t border-b border-r border-gray-900 hover:bg-gray-900 hover:text-white  dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
                      addcalssnameActiv("status=shipped")
                        ? "bg-black text-white  dark:bg-gray-500"
                        : ""
                    }`}
                  >
                    <FcShipped className="mr-2" />
                    shipped
                  </button>
                  <button
                    onClick={() => {
                      handelNavgetePage("delivered");
                    }}
                    type="button"
                    className={`inline-flex  items-center px-4 py-2 text-sm font-medium text-gray-900  border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white  dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
                      addcalssnameActiv("status=delivered")
                        ? "bg-black text-white  dark:bg-gray-500"
                        : ""
                    }`}
                  >
                    <AiOutlineDeliveredProcedure className="mr-2" />
                    delivered
                  </button>
                </div>
              </h3>
            </div>
            {/* <div className="flex flex-col   gap-3 sm:flex-row sm:items-center">
              <Link
                to="/Addproduct"
                className="Add flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700   dark:bg-white/[0.03] dark:text-gray-200"
              >
                <IoIosAdd className="" />
                Add  Customer
              </Link>
            </div> */}
          </div>
          {/* ///theis table */}
          <div className="max-w-full overflow-x-auto custom-scrollbar">
            <table className="min-w-full">
              <thead className="border-gray-100 border-y dark:border-gray-800">
                <tr>
                  <th className="px-6 py-3 whitespace-nowrap ">
                    <div className="flex items-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        ID
                      </p>
                    </div>
                  </th>
                  <th className="px-6 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        Customer
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
                        Total
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
                        Address
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
                {customerorder.map((item) => {
                  return <OrdorT key={item.id} item={item} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContenerCusOrd;
const Wrapper = styled.section`
  .Activ {
    background-color: black;
    color: white;
  }
  .Campny .activ {
    background-color: #e1e1e1;
  }
`;
