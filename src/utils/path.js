import AllUsers from "../components/AllUsers";
import BuildingTypes from "../components/BuildingTypes";
import HalfTime from "../components/HalfTime";
import Home from "../components/Home";
import Report from "../components/Report";
import TimeUp from "../components/TimeUp";

export const paths =[
    {
        id:0,
        path:'/',
        element:<Home/>
    },
    {
        id:1,
        path:'/report',
        element:<Report/>
    },
    {
        id:2,
        path:'/all-users',
        element:<AllUsers/>
    },
    {
        id:3,
        path:'/half-time',
        element:<HalfTime/>
    },
    {
        id:4,
        path:'/time-up',
        element:<TimeUp/>
    },
    {
        id:5,
        path:'/building-types',
        element:<BuildingTypes/>
    },
]