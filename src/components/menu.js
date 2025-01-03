import React from "react";
import Link from 'next/link' 

export const Menu = () => {
  return (
    <div>
      
      <ul className="menu">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">AboutUs</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
