import Links from "../Util/Links";
import { NavLink } from "react-router";

function NavLinks() {
  return (
    <>
      <div className="nav-links">
        {Links.map((link) => {
          const { text, path, id, icon } = link;
          return (
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive
                  ? "nav-link active  dark:text-white/90 dark:bg-white/[0.03]"
                  : "nav-link  ";
              }}
              key={id}
           
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
export default NavLinks;
