import React from 'react'
import { Link,useLocation } from 'react-router-dom';

export default function Navbar() {
const location = useLocation();

  return (
    <nav className={`${window.innerWidth <= 576 ? "h-[80px]":" h-[100px]"} absolute w-full top-0  flex items-center z-20`}>
      <div className={`${window.innerWidth <= 576 ? "justify-between w-[100%] ":"mx-[5%] h-[70px] w-[90%]"}  flex flex-row`}>
        <div className={`${window.innerWidth <= 576? "ps-1" : "ps-2"}`}>
          <img className={location.pathname === '/signin'? (window.innerWidth <= 576 ? "h-[50px] flex items-center object-cover ":"h-[100px] flex items-center ps-[30px]") :( window.innerWidth <= 576 ? "h-[50px] flex items-center" : "h-[70px] flex items-center")} src= {location.pathname === '/signin'?"netfliex-310.png":"netfliex-180.png"} alt="logo" />
        </div>
        <div className={`${window.innerWidth <=  576 ?"flex justify-between ":"py-3 ps-[75%]"} `}>
          {location.pathname === '/signin' || (
            <Link to='/signin'>
                <button className={`${window.innerWidth <= 576 ?"mt-[3px] mr-[15px] h-[40px] font-semibold":"mt-[1px] h-[50px] font-bold"}  w-[100px] bg-red-600 hover:bg-red-700 rounded-[10px] text-white`}>Sign in</button>
            </Link> 
         )}
        </div>
      </div>
    </nav>
  )
}
