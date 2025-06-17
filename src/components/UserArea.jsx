import React, { useState } from "react";
import MnuUser from "./MnuUser";
import { useSelector } from "react-redux";
import { setstring } from "../Util";

function UserArea() {
  const user = useSelector((state) => state.userState.user);
  const [Userarya, setUser] = useState(false);

  const handelUser = () => {
    setUser(!Userarya);
  };
  if (!user) {
    return null;
  }

  return (
    <>
      <div className="relative" />
      <a
        className="flex items-center text-gray-700 dark:text-gray-400"
        onClick={handelUser}
      >
        {user.photo != null ? (
          <span className="mr-3 h-11 w-11 overflow-hidden rounded-full">
            <img src={user?.photo} alt="User" />
          </span>
        ) : (
          <span className="mr-3 h-11 w-11 flex items-center justify-center  overflow-hidden rounded-full bg-gray-600">
            <span>{setstring(user?.name ?? "D") ?? ""}</span>
          </span>
        )}
        <span className="mr-1 block text-sm font-medium dark:text-white">
          {user?.name}
        </span>
        {!Userarya ? (
          <svg
            className="stroke-gray-500 dark:stroke-gray-400"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
              stroke=""
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        ) : (
          <svg
            className="stroke-gray-500 dark:stroke-gray-400 rotate-180"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
              stroke=""
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        )}
        {Userarya ? <MnuUser /> : null}
      </a>
    </>
  );
}

export default UserArea;
