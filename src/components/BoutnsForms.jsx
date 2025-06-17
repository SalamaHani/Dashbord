import React from "react";
import { Link } from "react-router";

function BoutnsForms({ redirecte }) {
  return (
    <div className="col-span-12 space-y-6 xl:col-span-12">
      <div className="flex justify-end">
        <div className="flex items-center gap-3 mt-1">
          <button
            type="submit"
            className="flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            Save Changes
          </button>

          <Link
            to={`/${redirecte}`}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BoutnsForms;
