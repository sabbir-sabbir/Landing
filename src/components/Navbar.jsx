
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Navbar() {

  



  return (
    <>
      <nav className="fixed w-full z-0 top-0 left-0 bg-[#E4E4E7] p-2">
        <ul className="max-w-[90vw] flex flex-wrap justify-between mx-auto items-center gap-1 md:gap-3">
          <li className="">
            <img src="mainlogo.png" alt="Logo"  className="w-[136px] h-[36px]"/>
          </li>
          <div className="flex [&>li]:pl-[60px]">
            <li><NavLink to="/" exact activeClassName="active" className="">Dashboard</NavLink></li>
            <li><NavLink to="/about" activeClassName="active" className=" ">Incidents</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active" className=" ">Locations</NavLink></li>
            <li><NavLink to="/signUp" activeClassName="active" className=" ">Activities</NavLink></li>
            <li><NavLink to="/cypher" activeClassName="active" className=" ">Cypher AI</NavLink></li>
            
          </div>
          <div className="flex items-center gap-2">
            <img src="realbel.png" alt="img" className="w-[40px] h-[41px]"/>
            <img src="bell2.png" alt="img" className="w-[40px] h-[41px]"/>
            <p className="font-[xl] text-[#A1A1AA] text-[]"> <span className="font-bold text-2xl text-[#A1A1AA]">Usman Zafar</span> <br />usmanzafar@gmail.com</p>
          </div>
        </ul>
          {/* second pard  */}
          
       
      </nav>
      <Outlet />
    </>
  );
}

