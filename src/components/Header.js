import { useState,useEffect } from "react";
import logo from '../assets/logo.jpg';
import './header.css';
import { Linkedin,Menu,Mail,Github } from 'lucide-react';
import NavBar from "./navbar";
import { LINKS } from "./../constants";
import { useToaster } from "./toaster";


const Header = () => {
  const { notification } = useToaster();
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

  const openURL = (url) => () => {
    let link = '';
        switch (url) {
          case 'Mail':
            navigator.clipboard.writeText(LINKS.email);
            notification("Email ID Copied to Clipboard");
            break;
          case 'Github':
            link = LINKS.github;
            window.open(link, '_blank');
            break;
          default:
            link = LINKS.linkedIn;
            window.open(link, '_blank');
            break;
        }
  };
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
            <Mail color="white" fill="black" className="mx-2" onClick={openURL('Mail')}/>
            <Github fill="black"className="mx-2" onClick={openURL('Github')}/>
            <Linkedin fill="black"className="mx-2" onClick={openURL('Linkedin')}/>
        </div>
      </div>
      {(width  > 799 || isToggleOpen) && <NavBar />}
      </div>
    </>
  );
};

export default Header;
