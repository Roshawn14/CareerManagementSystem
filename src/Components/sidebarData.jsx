import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const sidebarData=[
  {title:"Dashboard",
    icon: <HomeIcon/>,
    link:"/dashboard"
    
  },
  {title:"Applications",
    icon: <WorkIcon/>,
    link:"/applications"
    
  },
  {title:"Interviews",
    icon: <CalendarMonthIcon/>,
    link:"/interviews"
    
  },
  {title:"Deadlines",
    icon: <AccessTimeIcon/>,
    link:"/deadlines"
    
  },
  {title:"Settings",
    icon: <SettingsIcon/>,
    link:"/settings"
    
  }
 
];