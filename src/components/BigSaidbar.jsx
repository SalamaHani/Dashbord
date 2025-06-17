import React from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import styled from "styled-components";
import NavLinkse from "./NavLinkse";
import Logosm from "./Logosm";
export default function BigSaidbar() {
  const isSidebarOpene = useSelector((state) => state.utilState.isSaidparOpen);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpene
            ? "sidebar-container-e bg-white dark:border dark:border-gray-800 dark:bg-white/[0.03]e dark:bg-gray-900 "
            : "sidebar-container bg-white  dark:border dark:border-gray-800 show-sidebar dark:bg-gray-900"
        }
      >
        <div className="content dark:text-white">
          {isSidebarOpene ? (
            <header>
              {" "}
              <Logosm />
            </header>
          ) : (
            <header className="pl-10">
              <Logo />
            </header>
          )}
          {isSidebarOpene ? <NavLinkse /> : <NavLinks />}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .sidebar-container-e {
      min-height: 100vh;
      height: 100%;
      width: 100px;
      margin-left: 0px;
      transition: var(--transition);
    }

    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
    }
    .nav-links {
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      margin: 5px 20px;
      align-items: center;
      padding: 10px;
      border-radius: 7px;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link-e {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      margin: 5px 20px;
      border-radius: 7px;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link-e:hover {
      background: oklch(0.24 0.03 263.67);
      color: var(--white);
    }
    .nav-link:hover {
      background: oklch(0.24 0.03 263.67);
      color: var(--white);
    }
    .nav-link:hover .icon {
      color: var(--white);
    }
    .nav-link-e:hover .icon-e {
      /* border-radius: 5px;
      background: var(--grey-50); */
      color: var(--white);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .icon-e {
      font-size: 1.5rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .icon .said {
      .icon {
        font-size: 1.5rem;
        margin-right: 1rem;
        display: grid;
        place-items: center;
        transition: var(--transition);
      }
    }
    .icon-e .said-e {
      .icon-e {
        font-size: 1.5rem;
        display: grid;
        place-items: center;
        transition: var(--transition);
      }
    }
    .active {
      /* dark:text-white/90 dark:bg-white/[0.03] */
      background: oklch(0.24 0.03 263.67);
      color: var(--white);
    }
    .active .icon {
      color: var(--white);
    }
    .active {
      background: oklch(0.24 0.03 263.67);
      color: var(--white);
    }
    .active .icon-e {
      background: oklch(0.24 0.03 263.67);
      color: var(--white);
    }
  }
`;
