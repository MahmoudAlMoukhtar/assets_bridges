import "./sidebar.css";
import {NavLink} from "react-router-dom";
import {HiInbox} from "react-icons/hi";
import {BsFillBoxSeamFill} from "react-icons/bs";
export default function Sidebar({theme, selectTheme, navbarModal}) {
  return (
    <div
      style={{color: "#fff !important"}}
      className={
        theme === "black"
          ? " bg-zinc-800 w-60 hidden lg:block h-screen shadow-md"
          : " bg-white w-60 hidden lg:block h-screen shadow-md"
      }
    >
      <div
        className={
          theme === "black"
            ? "sidebarWrapper bg-zinc-800"
            : "sidebarWrapper bg-white"
        }
      >
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/admin" className="link">
              <li className="sidebarListItem active">Home</li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink
              to="/admin/messages"
              className="link flex items-center gap-2"
            >
              <div>
                <HiInbox size={30} />
              </div>
              <li className="sidebarListItem">Messages</li>
            </NavLink>
            <NavLink
              to="/admin/services"
              className="link flex items-center gap-2"
            >
              <div>
                <BsFillBoxSeamFill size={25} />
              </div>
              <li className="sidebarListItem">Serviceses Requests</li>
            </NavLink>
            <NavLink
              to="/admin/changePassword"
              className="link flex items-center gap-2"
            >
              <div>
                <BsFillBoxSeamFill size={25} />
              </div>
              <li className="sidebarListItem">Change Password</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
