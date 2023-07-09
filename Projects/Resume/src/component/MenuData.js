import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
export const MenuData = [
  {
    title:"Home",
    icon: <HomeRoundedIcon/>,
    link:"./home"
  },
  {
    title:"About",
    icon: <ManageAccountsIcon/>,
    link:"./home"
  },
  {
    title:"Resume",
    icon: <InsertDriveFileIcon />,
    link:"./home"
  },
  {
    title:"Portfolio",
    icon: <MenuBookIcon/>,
    link:"./home"
  },
  {
    title:"Services",
    icon: <MiscellaneousServicesIcon/>,
    link:"./home"
  },
  {
    title:"Contact",
    icon: <MailOutlineOutlinedIcon/>,
    link:"./home"
  }
]