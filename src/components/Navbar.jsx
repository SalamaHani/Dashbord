import { useDispatch } from "react-redux";
import { toogelthemes, toogelSaidpar } from "../features/Util/utilSlice";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaAlignLeft } from "react-icons/fa";
import styled from "styled-components";
import Logo from "./Logo";

import UserArea from "./UserArea";
function Navbar() {
  const dispatch = useDispatch();
  const handeltheme = () => {
    dispatch(toogelthemes());
  };
  const handeltogel = () => {
    dispatch(toogelSaidpar());
  };
  return (
    <Wrapper>
      <header className="bg-white dark:bg-gray-900  z-99999   dark:border dark:border-gray-800  sticky top-0 transition-shadow shadow-xl duration-300">
        <nav
          className="mx-auto flex container   z-99999  dark:bg-gray-900 items-center justify-between p-3 lg:px-4"
          aria-label="Global"
        >
          <button type="button" className="toggle-btn " onClick={handeltogel}>
            <FaAlignLeft className="dark:text-white" />
          </button>
          <div className=" w-full items-center justify-between gap-4 px-5 py-4 shadow-theme-md lg:flex lg:justify-end lg:px-0 lg:shadow-none hidden">
            <label className="swap swap-rotate mr-3 h-11 w-11 overflow-hidden rounded-full">
              <input type="checkbox" onChange={handeltheme} />
              <BsSunFill className="swap-on h-4 w-4 dark:text-white" />
              <BsMoonFill className="swap-off h-4 w-4 text-black dark:text-white" />
            </label>
            <UserArea />
          </div>
        </nav>
      </header>
    </Wrapper>
  );
}
// flex justify-between  items-center dark:bg-gray-900
export default Navbar;
const Wrapper = styled.nav`
  z-index: 999999;
  /* height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1); */
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  /* .nav-center {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  } */
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
