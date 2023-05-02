import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../imgs/logo.png'

import { UilBars } from "@iconscout/react-unicons";
import { SidebarData } from '../../Data/Data'
const Sidebar = () => {
    const [selected,setSelected]=useState()
    const [expanded, setExpaned] = useState(true)
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
    console.log(window.innerWidth)
  return (
    
    <div className='sidebar'>
        <div className="logo">
            <img src={logo} alt="logo" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>
        <div className="menu">
              {SidebarData.map((item,index)=>{
                return (
                    <div className={selected===index?"menuItem active":"menuItem"}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>{item.heading}</span>
                    </div>
                )
              })}

        </div>
      
    </div>
  )
}

export default Sidebar
