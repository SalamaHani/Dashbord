import React from "react";

function TbaTabel(Data) {
  const { name, email, state } = { ...Data };
  console.log(name);
  return (
    <>
      <tr>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100">
                <span className="text-xs font-semibold text-brand-500">
                  {" "}
                  JD{" "}
                </span>
              </div>
              <div>
                <span className="text-theme-sm mb-0.5 block font-medium text-gray-700 dark:text-gray-400">
                  {name}
                </span>
                <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                  {email}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <p className="text-gray-700 text-theme-sm dark:text-gray-400">
              Software License
            </p>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <p className="text-gray-700 text-theme-sm dark:text-gray-400">
              $18,50.34
            </p>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <p className="text-gray-700 text-theme-sm dark:text-gray-400">
              2024-06-15
            </p>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <p className="bg-success-50 text-theme-xs text-success-600 dark:bg-success-500/15 dark:text-success-500 rounded-full px-2 py-0.5 font-medium">
              {state}
            </p>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <p className="text-gray-700 text-theme-sm dark:text-gray-400">
              2024-06-15
            </p>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center justify-center">
            <svg
              className="cursor-pointer hover:fill-error-500 dark:hover:fill-error-500 fill-gray-700 dark:fill-gray-400"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                fill=""
              ></path>
            </svg>
          </div>
        </td>
      </tr>
    </>
  );
}

export default TbaTabel;
