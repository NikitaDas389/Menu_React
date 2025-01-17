import React, { useEffect, useState } from "react";
import Link from "next/link";

export const Menu = () => {

  const [menuItem, setMenuItem] = useState("");
  const [isMobileMenu,setIsMobileMenu]=useState(false)
  const [left,setLeft]=useState(-150)

  const getBrowserWidth = () => {
    let timeoutid;
    let flag=true;
    setIsMobileMenu(document.body.offsetWidth < 600 ? true : false)

    window.addEventListener('resize', () => {
      let width=document.body.offsetWidth
      
      if(flag)
      {
        flag=false;
        setIsMobileMenu(width < 600 ? true : false)
      }
      clearTimeout(timeoutid) 
      timeoutid=setTimeout(() => {
        setIsMobileMenu(width < 600 ? true : false)
      }, 1000);
     });
  };
  
 
  useEffect(() => {
    let pathname = window.location.pathname;
    setMenuItem(pathname.slice(1) || "home");
    getBrowserWidth();
  }, []);

  const fnMenuClik = (eve) => {
    setMenuItem(eve.target.id);
    if(isMobileMenu){
      setLeft(-150)
    }
  };
   
   const fnMobileMenuBtnClick=()=>{
  setLeft(left === 0 ? -150 : 0)
  }
  const fnClose =()=>{
    setLeft(-150)
  }
  return (
    <div>
     {isMobileMenu && <button onClick={fnMobileMenuBtnClick} className="mobile-menu-btn">menu</button>}
      <ul style={{left:left}} className={isMobileMenu ? 'mobile-menu': 'menu'}>
        {isMobileMenu && <span onClick={fnClose} className="close-btn">x</span>}
        <li>
          <Link
            id="home"
            className={menuItem === "home" ? "active_menu" : undefined}
            onClick={fnMenuClik}
            href="/home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            id="AboutUs"
            className={menuItem === "AboutUs" ? "active_menu" : undefined}
            onClick={fnMenuClik}
            href="/about"
          >
            AboutUs
          </Link>
        </li>
        <li>
          <Link
            id="Contact"
            className={menuItem === "Contact" ? "active_menu" : undefined}
            onClick={fnMenuClik}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
