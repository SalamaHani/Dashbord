import { useDispatch, useSelector } from "react-redux";
import { toogelSaidpar } from "../features/Util/utilSlice";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import styled from "styled-components";
import Logo from "./Logo";
function SmallSidbar() {
  const dispatch = useDispatch();
  const togel = () => {
    dispatch(toogelSaidpar());
  };
  //   const themse = useSelector((state) => state.userState.themes);
  const isSidebarOpene = useSelector((state) => state.utilState.isSaidparOpen);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpene
            ? "sidebar-container bg-white show-sidebar dark:bg-gray-900"
            : "sidebar-container bg-white dark:bg-gray-900"
        }
      >
        <div className="content bg-white dark:bg-gray-900">
          <button className="close-btn" onClick={togel}>
            <FaTimes className="dark:text-white" />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={togel} />
        </div>
      </div>
    </Wrapper>
  );
}
export default SmallSidbar;
const Wrapper = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: start;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--grey-900);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }

  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  /* .active {
    color: var(--grey-900);
  }
  .active .icon {
    color: var(--primary-500);
  } */
`;
