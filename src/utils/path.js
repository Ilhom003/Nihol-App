import AllUsers from "../components/AllUsers";
import BuildingTypes from "../components/BuildingTypes";
import OrdinaryRooms from "../components/BuildingTypes/OrdinaryRooms";
import LuxuryRooms from "../components/BuildingTypes/LuxuryRooms";
import Cottages from "../components/BuildingTypes/Cottages";
import HalfTime from "../components/HalfTime";
import Home from "../components/Home";
import Report from "../components/Report";
import TimeUp from "../components/TimeUp";
import SecondBuilding from "../components/Buildings/SecondBuilding";
import FourthBuilding from "../components/Buildings/FourthBuilding";

export const paths = [
  {
    id: 0,
    path: "/",
    element: <Home />,
  },
  {
    id: 1,
    path: "/report",
    element: <Report />,
  },
  {
    id: 2,
    path: "/all-users",
    element: <AllUsers />,
  },
  {
    id: 3,
    path: "/half-time",
    element: <HalfTime />,
  },
  {
    id: 4,
    path: "/time-up",
    element: <TimeUp />,
  },
  {
    id: 5,
    path: "/building-types",
    element: <BuildingTypes />,
    hasChild: true,
    children: [
      {
        id: 5 - 1,
        path: "ordinary-rooms",
        element: <OrdinaryRooms />,
        hasChild: true,
        children2:[
         { id:'5-1-1',path:'building/2',element:<SecondBuilding/> },
         { id:'5-1-2',path:'building/4',element:<FourthBuilding/> },
         { id:'5-1-3',path:'building/4',element:<h1>FourthBuilding</h1> },
        ]
      },
      { id: 5 - 2, path: "luxury-rooms", element: <LuxuryRooms /> },
      { id: 5 - 3, path: "cottages", element: <Cottages /> },
    ],
  },
];
