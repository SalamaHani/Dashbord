import React from "react";
import { Link } from "react-router";
function Logosm() {
  const styled = { height: "39px", width: "32px" };
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            src="/public/images/Svg_LOGO_ 2025-05-25 221945.png"
            alt="Astrofront"
            loading="lazy"
            decoding="async"
            style={styled}
            width="300"
            height="66"
            className="inline-block dark:hidden"
          ></img>
          <img
            src="/public/images/Logo_svg_dark2025-05-25 222112.png"
            alt="Astrofront"
            loading="lazy"
            decoding="async"
            style={styled}
            width="300"
            height="66"
            className="hidden dark:inline-block"
          ></img>
        </Link>
      </div>
    </>
  );
}

export default Logosm;
