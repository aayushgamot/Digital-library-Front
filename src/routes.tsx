import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdEco,
  MdDragIndicator,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/dashboard";
import Books from "views/admin/books";
import userdetail from "views/admin/userdetail";
import issuedbook from "views/admin/issuedbook";
import staff from "views/admin/staff";
import Penalty from "views/admin/penalty";
import Add from "views/admin/userdetail/components/Add";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Books",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: Books,
    secondary: true,
  },
  {
    name: "Issued Books",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: issuedbook,
  },
  {
    name: "Penalty",
    layout: "/admin",
    path: "/rtl",
    icon: <Icon as={MdEco} width="20px" height="20px" color="inherit" />,
    component: Penalty,
  },
  {
    name: "User Details",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: userdetail,
  },

  {
    name: "Staff",
    layout: "/admin",
    path: "/rtl-default",
    icon: (
      <Icon as={MdDragIndicator} width="20px" height="20px" color="inherit" />
    ),
    component: staff,
  },
  {
    name: "Admin Login",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
  //   {
  //     name: "ADD USER",
  //     layout: "/admin",
  //     path: "/AddUser",
  //     component: Add,
  //   },
];

export default routes;
