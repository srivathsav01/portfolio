import { useState,useEffect } from "react";
import logo from '../assets/logo.jpg';
import './header.css';
import { Linkedin,Menu,Mail,Github } from 'lucide-react';
import NavBar from "./navbar";





const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <div>
      <div className="header">
        <div>
            <Menu className="menuToggleBtn" onClick={handleToggleOpen}/>
        </div>
        <div className="nav_logo">
            <img src={logo} alt="Logo" className="h-[45px]" />
        </div>
        <div className="flex items-center contact_icons">
            <Mail color="white" fill="black" className="mx-2"/>
            <Github fill="black"className="mx-2"/>
            <Linkedin fill="black"className="mx-2"/>
        </div>
      </div>
      {(width  > 799 || isToggleOpen) && <NavBar />}
      </div>
    </>
  );
};

export default Header;
