import Links from "../Util/Links";
import { NavLink } from "react-router";

function NavLinkse() {
  return (
    <>
      <div className="nav-links">
        {Links.map((link) => {
          const { path, id, icon } = link;
          return (
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive
                  ? "nav-link-e active dark:text-white/90 dark:bg-white/[0.03]"
                  : "nav-link-e ";
              }}
              key={id}
              end
            >
              <span className="icon-e">{icon}</span>
              {""}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
export default NavLinkse;
