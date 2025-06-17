import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { useSelector } from "react-redux";
function FormUser() {
  const errorse = useSelector((state) => state.utilState.error);
  const UserData = useLoaderData();
  const [showpass, setshowpass] = useState(false);
  const handelshowpass = () => {
    setshowpass(!showpass);
  };
  console.log({ ...UserData });
  const {
    first_name,
    social_links,
    last_name,
    email,
    phone,
    bio,
    street_address,
    city,
    zip_code,
    country,
  } = { ...UserData };
  const { facebook, linkedin, twitter, instagram } = { ...social_links };
  return (
    <>
      <div className="col-span-12 space-y-6 xl:col-span-12 mb-4">
        <div className="rounded-2xl border border-gray-200 bg-white px-5  pt-5 pb-0 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <div className="p-5 space-y-6 border-t border-gray-100 dark:border-gray-800 sm:p-6">
            <div className="-mx-2.5 flex flex-wrap gap-y-5">
              <div className="w-full px-2.5">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Update imge
                </h5>
                <div className="dropzone  hover:border-success/50 dark:hover:border-brand-500 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-7 lg:p-10 dark:border-gray-700 dark:bg-gray-900 dz-clickable">
                  <div className="dz-message m-0 ">
                    <label htmlFor="image">
                      <div className="mb-[20px] flex justify-center">
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
                      name="photo"
                      placeholder=""
                      accept="image/*"
                    />
                    {errorse.photo != null ? (
                      <span className="text-sm text-error/75 ">
                        {errorse.photo[0]}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full px-2.5">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Social Links
                </h5>
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Facebook
                    </label>
                    <input
                      name="facebook"
                      type="text"
                      defaultValue={
                        facebook ?? "https://www.facebook.com/PimjoHQ"
                      }
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      X.com
                    </label>
                    <input
                      name="twitter"
                      type="text"
                      defaultValue={twitter ?? "https://x.com/PimjoHQ"}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Linkedin
                    </label>
                    <input
                      name="linkedin"
                      type="text"
                      defaultValue={linkedin ?? "https://linkedin.com/PimjoHQ"}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Instagram
                    </label>
                    <input
                      name="instagram"
                      type="text"
                      defaultValue={
                        instagram ?? "https://instagram.com/PimjoHQ"
                      }
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-7 w-full px-2.5">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Personal Information
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      First Name
                    </label>
                    <input
                      name="first_name"
                      type="text"
                      defaultValue={first_name ?? "fname"}
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    {errorse.first_name != null ? (
                      <span className="text-sm text-error/75 ">
                        {errorse.first_name[0]}
                      </span>
                    ) : null}
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Last Name
                    </label>
                    <input
                      name="last_name"
                      type="text"
                      defaultValue={last_name ?? "lname"}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    {errorse.last_name != null ? (
                      <span className="text-sm text-error/75 ">
                        {errorse.last_name[0]}
                      </span>
                    ) : null}
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="text"
                      defaultValue={email ?? "randomuser@pimjo.com"}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    {errorse.email != null ? (
                      <span className="text-sm text-error/75 ">
                        {errorse.email[0]}
                      </span>
                    ) : null}
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="text"
                      defaultValue={phone ?? "+09 363 398 46"}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Bio
                    </label>
                    <input
                      name="bio"
                      type="text"
                      defaultValue={bio ?? "Team Manager"}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>
                  <div className="col-span-2">
                    <button
                      type="button"
                      onClick={handelshowpass}
                      className="flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                    >
                      Change password
                    </button>
                  </div>
                  {showpass ? (
                    <>
                      <div className="col-span-2 lg:col-span-1">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                          New Password
                        </label>
                        <input
                          name="password"
                          type="password"
                          placeholder="••••••••"
                          autoComplete="frflr"
                          className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        />
                        {errorse.password != null ? (
                          <span className="text-sm text-error/75 ">
                            {errorse.password[0]}
                          </span>
                        ) : null}
                      </div>
                      <div className="col-span-2 lg:col-span-1">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                          Confirm password
                        </label>
                        <input
                          name="password_confirmation"
                          placeholder="••••••••"
                          type="text"
                          className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        />
                        {errorse.password != null ? (
                          <span className="text-sm text-error/75 ">
                            {errorse.password[0]}
                          </span>
                        ) : null}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="mt-7 w-full px-2.5">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Address Information
                </h5>
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Country
                    </label>
                    <input
                      name="country"
                      type="text"
                      defaultValue={country ?? "United States"}
                      class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      City/State
                    </label>
                    <input
                      name="city"
                      type="text"
                      defaultValue={city ?? "Arizona, United States."}
                      class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Postal Code
                    </label>
                    <input
                      name="zip_code"
                      type="text"
                      defaultValue={zip_code ?? "ERT 2489"}
                      class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      TAX ID
                    </label>
                    <input
                      name="street_address"
                      type="text"
                      defaultValue={street_address ?? "AS4568384"}
                      class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-span-12 space-y-6 xl:col-span-8">
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
                  Customer Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name Product"
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
                  Emial
                </label>
                <input
                  type="text"
                  name="sku"
                  placeholder="Enter SKU"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
                <span className="text-sm text-gray-400 ">
                  Enter the Email .
                </span>
              </div>

              <div className="w-full px-2.5">
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  State
                </label>
                <input
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
                    Enter the State User
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default FormUser;
