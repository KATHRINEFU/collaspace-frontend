import { RouteObject } from "react-router-dom";
import TeamDashboard from "../pages/user/TeamDashboard";

export const UserRoutes: RouteObject[] = [
  {
    path: "/user/dashboard",
    lazy: () => import("../pages/user/Dashboard"),
  },
  {
    path: "/user/create-event",
    lazy: () => import("../pages/user/CreateEvent"),
  },
  {
    path: "/user/create-ticket",
    lazy: () => import("../pages/user/CreateTicket"),
  },
  {
    path: "/user/create-team",
    lazy: () => import("../pages/user/CreateTeam"),
  },
  {
    path: "/user/create-account",
    lazy: () => import("../pages/user/CreateAccount"),
  },
  {
    path: "/user/events",
    lazy: () => import("../pages/user/AllEvents"),
  },
  {
    path: "/user/tickets",
    lazy: () => import("../pages/user/AllTickets"),
  },
  {
    path: "/user/calendar",
    lazy: () => import("../pages/user/MyCalendar"),
  },
  {
    path: "/user/profile",
    lazy: () => import("../pages/user/Profile"),
  },
  {
    path: "/user/team/:teamId",
    element: <TeamDashboard />,
  },
];
