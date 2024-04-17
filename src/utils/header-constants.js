import { BiSolidPlanet } from "react-icons/bi";
import { ImHome3 } from "react-icons/im";
import { FaTrophy } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";

// MAPPING FO HEADER USED
export const HEADER_MAPPING = [
  { title: "My Space", logo: BiSolidPlanet, routeParam: "/my-space" },
  { title: "Home", logo: ImHome3, routeParam: "/" },
  { title: "Events", logo: FaTrophy, routeParam: "/events" },
  { title: "Videos", logo: FaYoutube, routeParam: "/videos" },
  { title: "Live", logo: ImHome3, routeParam: "/live" },
  { title: "Register", logo: TiUserAdd, routeParam: "/register" },
];
