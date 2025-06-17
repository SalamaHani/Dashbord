import { useSelector } from "react-redux";
export default function AddImgCatog() {
  const errorse = useSelector((state) => state.utilState.error);
  return (
    <>
      <div className="col-span-12 space-y-6 xl:col-span-4 mb-5">
        <div className="rounded-2xl border border-gray-200 bg-white px-2 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-2 sm:pt-6">
          <div className="px-5 py-4 sm:px-6 sm:py-5">
            <h3 className="text-base m-0 font-medium text-gray-800 dark:text-white/90">
              Uplode imge
            </h3>
          </div>
          <div className="space-y-6 border-t border-gray-100  sm:p-6 dark:border-gray-800">
            <div className="dropzone  hover:border-success/50 dark:hover:border-brand-500 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-7 lg:p-10 dark:border-gray-700 dark:bg-gray-900 dz-clickable">
              <div className="dz-message m-0 ">
                <label htmlFor="image">
                  <div className="mb-[22px] flex justify-center">
                    <div className="flex h-[68px] w-[68px]  items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                      <svg
                        className="fill-current"
                        width="29"
                        height="28"
                        viewBox="0 0 29 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.5019 3.91699C14.2852 3.91699 14.0899 4.00891 13.953 4.15589L8.57363 9.53186C8.28065 9.82466 8.2805 10.2995 8.5733 10.5925C8.8661 10.8855 9.34097 10.8857 9.63396 10.5929L13.7519 6.47752V18.667C13.7519 19.0812 14.0877 19.417 14.5019 19.417C14.9161 19.417 15.2519 19.0812 15.2519 18.667V6.48234L19.3653 10.5929C19.6583 10.8857 20.1332 10.8855 20.426 10.5925C20.7188 10.2995 20.7186 9.82463 20.4256 9.53184L15.0838 4.19378C14.9463 4.02488 14.7367 3.91699 14.5019 3.91699ZM5.91626 18.667C5.91626 18.2528 5.58047 17.917 5.16626 17.917C4.75205 17.917 4.41626 18.2528 4.41626 18.667V21.8337C4.41626 23.0763 5.42362 24.0837 6.66626 24.0837H22.3339C23.5766 24.0837 24.5839 23.0763 24.5839 21.8337V18.667C24.5839 18.2528 24.2482 17.917 23.8339 17.917C23.4197 17.917 23.0839 18.2528 23.0839 18.667V21.8337C23.0839 22.2479 22.7482 22.5837 22.3339 22.5837H6.66626C6.25205 22.5837 5.91626 22.2479 5.91626 21.8337V18.667Z"
                          fill=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                </label>
                <input
                  className="hidden"
                  type="file"
                  id="image"
                  name="thumbnail"
                  placeholder=""
                  accept="image/*"
                />
              </div>
            </div>
            {errorse.thumbnail != null ? (
              <span className="text-sm text-error/75 ">
                {errorse.thumbnail[0]}
              </span>
            ) : (
              <span className="mx-auto mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">
                Drag and drop your PNG, JPG, WebP, SVG images here or browse
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
