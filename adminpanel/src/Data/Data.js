import{
    UilEstate,
    UilClipboardAlt,
  
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
}  from '@iconscout/react-unicons';
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
export const SidebarData=[
    {
        icon:UilEstate,
        heading:"Dashboard",
    },
    {
        icon:UilClipboardAlt,
        heading:"Orders",
    },

    {
        icon:UilPackage,
        heading:"Products",
    },
    {
        icon:UilChart,
        heading:"Analytics",
    },
    {
        icon:UilSignOutAlt,
        heading:"SignOut",
    }
]

export const CardsData=[
    {
        title:'Sales',
        color:{
            backGround:"linear-gradient(180deg, #BB67FF 0%, #C484F3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barvalue:70,
        value:"25,970",
        png:UilUsdSquare,
        series:[
            {
                name:"Sales",
                data:[31,40,28,51,42,109,100],
            },
        ],
    },
    {
        title:'Revenue',
        color:{
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barvalue:70,
        value:"25,970",
        png:UilUsdSquare,
        series:[
            {
                name:"Sales",
                data:[31,40,28,51,42,109,100],
            },
        ],
    },
    {
        title:'Expenses',
        color:{
            backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barvalue:60,
        value:"4,270",
        png:UilUsdSquare,
        series:[
            {
                name:"Expenses",
                data:[31,40,28,51,42,109,100],
            },
        ],
    },
]

export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];