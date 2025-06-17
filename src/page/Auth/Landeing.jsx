import React from "react";
import Logo from "../../components/Logo";
import styled from "styled-components";
import { Link } from "react-router";
import Togelthemes from "../../components/Togelthemes";

export default function Landeing() {
  return (
    <Wrapper className="dark:bg-gray-900 h-full bg-white">
      <nav className="dark:bg-gray-900 ">
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info dark:text-white">
          <h1>
            Dashboard{" "}
            <span className="text-gray-950 dark:text-gray-600">Astrofront</span>
          </h1>
          <p className="dark:text-gray-400 text-gray-600">
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link
            to="/Login"
            className="felx rounded-md px-5 text-white py-2 dark:bg-gray-600 bg-black "
          >
            Login/Register
          </Link>
        </div>
        <img
          src="/public/images/11062497_48473_Converted_5_1.webp"
          alt="job hunt"
          className="img main-img"
        />
      </div>
      <Togelthemes />
    </Wrapper>
  );
}
const Wrapper = styled.main`
  position: relative;
  height: 100vh;
  nav {
    position: relative;
    width: var(--fluid-width);
    max-width: var(--max-width);
    height: var(--nav-height);
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
