import React, { useEffect, useState } from "react";
import Link from "next/link";

export const Menu = () => {
  const [menuItem, setMenuItem] = useState("");
  useEffect(() => {
    let pathName = window.location.pathname;
    setMenuItem(pathName.slice(1) || "home");
  }, []);
  const fnMenuClik = (eve) => {
    setMenuItem(eve.target.id);
  };
  return (
    <div>
      <ul className="menu">
        <li>
          <Link
            id="Home"
            className={menuItem == "Home" && "active_menu"}
            onClick={fnMenuClik}
            href="/home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            id="AboutUs"
            className={menuItem == "AboutUs" && "active_menu"}
            onClick={fnMenuClik}
            href="/about"
          >
            AboutUs
          </Link>
        </li>
        <li>
          <Link
            id="Contact"
            className={menuItem == "Contact" && "active_menu"}
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
