import { Link } from "react-router";
function Logo() {
  const styled = { height: "33px", width: "150px" };
  return (
    <>
      <div className="w-40 flex items-center justify-between space-x-7  lg:space-x-14">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            src="/public/images/logo.png"
            alt="Astrofront"
            loading="lazy"
            decoding="async"
            style={styled}
            width="300"
            height="66"
            className="inline-block dark:hidden"
          ></img>
          <img
            src="/public/images/logo-darkmode.png"
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
export default Logo;
