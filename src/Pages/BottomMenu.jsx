import React, {useEffect, useState} from 'react'
import { PaperPlaneRight, Password,FileText, FileVideo, FolderNotchPlus, Chalkboard, User, SelectionBackground, TextAa, SmileySticker, Headphones, DownloadSimple, MagnifyingGlass, TextT, ArrowsClockwise, ClockClockwise, Headset, SelectionPlus, Translate, ArrowsLeftRight, PlayCircle} from "phosphor-react";
import { Link } from 'react-router-dom';
function BottomMenu() {
  const [activeLink, setActiveLink] = useState('');
  const handleLinkClick = (link) => {
    setActiveLink(link);
    localStorage.setItem("currentTab",link)
  }
  useEffect(() => {
    let tab = localStorage.getItem("currentTab")
    if (tab){
      setActiveLink(tab)
    }
  }, [])
  

  
  return (
    <>
    <ul className="dashbrdMenu">
    <li><Link className={activeLink === 'landscapeVideo' ? 'dashActive' : ''} onClick={() => handleLinkClick('landscapeVideo')} to="/dashboard/landscapeVideo"><User size={32}  className="menuIcn"/> Avatars</Link></li>
    <li><Link className={activeLink === 'aitemplate' ? 'dashActive' : ''} onClick={() => handleLinkClick('aitemplate')} to="/dashboard/aitemplate"><FileVideo size={32} className="menuIcn" /> Template</Link></li>
    <li><Link className={activeLink === 'aibackground' ? 'dashActive' : ''} onClick={() => handleLinkClick('aibackground')} to="/dashboard/aibackground"><SelectionBackground size={32}  className="menuIcn"/> Background</Link></li>
    <li><Link className={activeLink === 'landscapeText' ? 'dashActive' : ''} onClick={() => handleLinkClick('landscapeText')} to="/dashboard/landscapeText"><TextAa size={32}  className="menuIcn"/> Text</Link></li>
    <li><Link className={activeLink === 'aisticker' ? 'dashActive' : ''} onClick={() => handleLinkClick('aisticker')} to="/dashboard/aisticker"><SmileySticker size={32}  className="menuIcn"/> Sticker</Link></li>
    <li><Link className={activeLink === 'aimusic' ? 'dashActive' : ''} onClick={() => handleLinkClick('aimusic')} to="/dashboard/aimusic"><Headphones size={32}  className="menuIcn"/> Music</Link></li>
    <li><Link to=""><DownloadSimple size={32}  className="menuIcn"/> Import</Link></li>

</ul>
    </>
);
}

export default BottomMenu;
