import { IoBarChartSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { BsBagDash } from "react-icons/bs";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdNoteAdd } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { IoReorderFour } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Links = [
  { id: 1, text: "Home", path: "/", icon: <IoBarChartSharp /> },
  { id: 2, text: "Products", path: "Products", icon: <AiOutlineProduct /> },
  {
    id: 3,
    text: "Add product",
    path: "Addproduct",
    icon: <MdFormatListBulletedAdd />,
  },
  { id: 5, text: "Categories", path: "Categories", icon: <BsBagDash /> },
  { id: 6, text: "Add Categories", path: "AddCategories", icon: <MdNoteAdd /> },
  { id: 7, text: "Customers", path: "Customers", icon: <FaUsers /> },
  { id: 8, text: "Customers Order", path: "CustomersOrder", icon: <IoReorderFour /> },
  { id: 9, text: "Users", path: "Users", icon: <FaRegUser /> },
  { id: 10, text: "Reports", path: "Reports", icon: <TbReportSearch /> },
  { id: 11, text: "Profile", path: "Profile", icon: <FaRegUserCircle /> },
  { id: 12, text: "Settings", path: "Settings", icon: <CiSettings /> },
];

export default Links;
