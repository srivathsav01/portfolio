import { useState,useEffect } from "react";
import logo from '../../assets/logo.jpg';
import './header.css';
import { Linkedin,Menu,Mail,Github,X } from 'lucide-react';
import NavBar from "../navbar/navbar";
import { LINKS } from "../../constants";
import { useToaster } from "../toaster/toaster";


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
      <div className="bg-white w-full flex items-center justify-between pt-2.5 pb-2 px-3 border-b-[rgb(0,0,0,25%)] border-solid lg:border-b sm:border-b-[none]">
        <div>
            {!isToggleOpen && <Menu className="menuToggleBtn lg:hidden sm:block text-2xl" onClick={handleToggleOpen}/> }
            {isToggleOpen &&  <X className="menuToggleBtn lg:hidden sm:block text-2xl" onClick={handleToggleOpen}/>}
        </div>
        <div className="py-0 px-3 sm:right-1">
            <img src={logo} alt="Logo" className="h-[45px]" />
        </div>
        <div className="items-center sm:hidden lg:flex">
            <Mail color="white" fill="black" className="mx-2" onClick={openURL('Mail')}/>
            <Github fill="black"className="mx-2" onClick={openURL('Github')}/>
            <Linkedin fill="black"className="mx-2" onClick={openURL('Linkedin')}/>
        </div>
      </div>
      {(width  > 1023 || isToggleOpen) && <NavBar />}
      </div>
    </>
  );
};

export default Header;
