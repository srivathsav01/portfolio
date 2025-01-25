import { useState } from "react";
import './contact.css';
import { Ellipsis, X, Linkedin, Mail, Github } from 'lucide-react';
import { LINKS } from "./../constants";


const Contact = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const openURL = (url) => () => {
    let link = '';
    switch (url) {
      case 'Mail':
        link = 'mailto:'+LINKS.email;
        break;
      case 'Github':
        link = LINKS.github;
        break;
      default:
        link = LINKS.linkedIn;
        break;
    }
    window.open(link, '_blank');
  };

  return (
    <>
        <div className={`contact-menu-container bottom-20 right-5 fixed flex flex-col gap-4 ${isToggleOpen ? 'open' : 'closed'}`}>
          <div className="rounded-full bg-black w-10 h-10 flex items-center justify-center" onClick={openURL('Mail')}>
            <Mail color="black" fill="white"/>
          </div>
          <div className="rounded-full bg-black w-10 h-10 flex items-center justify-center" onClick={openURL('Github')}>
            <Github fill="white" color="white"/>
          </div>
          <div className="rounded-full bg-black w-10 h-10 flex items-center justify-center" onClick={openURL('Linkedin')}>
            <Linkedin fill="white" color="white" />
          </div>
        </div>
        <div className="contact-menu rounded-full bg-black w-10 h-10 flex fixed bottom-5 right-5" onClick={handleToggleOpen}>
          {!isToggleOpen && <Ellipsis color="white"/>}
          {isToggleOpen &&  <X  color="white"/>}
        </div>
    </>
  );
};

export default Contact;



