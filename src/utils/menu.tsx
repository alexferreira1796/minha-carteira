import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from "react-icons/md";
const MenuLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: <MdDashboard />,
  },
  {
    name: "Entradas",
    path: '/list/entry-balance',
    icon: <MdArrowUpward />,
  },
  {
    name: "Saídas",
    path: '/list/exit-balance',
    icon: <MdArrowDownward />,
  },
  {
    name: "Sair",
    path: '/exit',
    icon: <MdExitToApp />,
  },
]

export default MenuLinks;