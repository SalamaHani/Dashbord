import { useLoaderData } from "react-router";
import CategroiesT from "./CategroiesT";
import { Link } from "react-router";
import { IoIosAdd } from "react-icons/io";
import EmptyProduct from "./EmptyProduct";
function ContenerTeablC() {
  const { Categories } = useLoaderData();
  if(Categories == 0 ){
    return <EmptyProduct titel={'Categories'}/>
  }
  return (
    <>
      <div className=" p-5 dark:border-gray-800 overflow-hidden sm:p-6">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex flex-col gap-5 px-6 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Categories
              </h3>
            </div>
            <div className="flex flex-col   gap-3 sm:flex-row sm:items-center">
              <Link
                to="/AddCategories"
                className="Add flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700   dark:bg-white/[0.03] dark:text-gray-200"
              >
                <IoIosAdd className="" />
                Add Categories
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
                        Category ID
                      </p>
                    </div>
                  </th>
                  <th className="px-6 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        Category Name
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
                        Action
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="py-3 divide-y divide-gray-100 dark:divide-gray-800">
                {Categories.map((item) => {
                  return <CategroiesT key={item.id} item={item} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContenerTeablC;
