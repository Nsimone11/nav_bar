import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

export const SidebarData=[
    {
        title:"Home",
        icon:<HomeIcon></HomeIcon>,
        link:"/home"
    },
    {
        title:"Mail",
        icon: <EmailIcon></EmailIcon>,
        link: "/mail"
    },
    {
        title: "Analytics",
        icon:<AnalyticsIcon></AnalyticsIcon>,
        link: "/analytics"
    },
    {
        title: "Dashboard",
        icon:<DashboardIcon></DashboardIcon>,
        link: "/dashboard"
    },
    {
        title: "Friends",
        icon:<GroupIcon></GroupIcon>,
        link: "/friends"
    },
    {
        title: "Images",
        icon:<ImageSearchIcon></ImageSearchIcon>,
        link: "/images"
    }
]
