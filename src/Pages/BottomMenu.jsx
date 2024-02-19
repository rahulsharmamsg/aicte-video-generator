import React, {useEffect, useState} from 'react'
import { PaperPlaneRight, Password,FileText, FileVideo, FolderNotchPlus, Chalkboard, User, SelectionBackground, TextAa, SmileySticker, Headphones, DownloadSimple, MagnifyingGlass, TextT, ArrowsClockwise, ClockClockwise, Headset, SelectionPlus, Translate, ArrowsLeftRight, PlayCircle} from "phosphor-react";
import { Link } from 'react-router-dom';
function BottomMenu({setActivePanel}) {
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
    <li><Link className={activeLink === 'landscapeVideo' ? 'dashActive' : ''} onClick={() => {handleLinkClick('landscapeVideo');setActivePanel("avatars")}} ><User size={32}  className="menuIcn"/> Avatars</Link></li>
    <li><Link className={activeLink === 'aitemplate' ? 'dashActive' : ''} onClick={() => {handleLinkClick('aitemplate');setActivePanel("template")}} ><FileVideo size={32} className="menuIcn" /> Template</Link></li>
    <li><Link className={activeLink === 'aibackground' ? 'dashActive' : ''} onClick={() => {handleLinkClick('aibackground');setActivePanel("background")}} ><SelectionBackground size={32}  className="menuIcn"/> Background</Link></li>
    <li><Link className={activeLink === 'landscapeText' ? 'dashActive' : ''} onClick={() => {handleLinkClick('landscapeText');setActivePanel("text")}} ><TextAa size={32}  className="menuIcn"/> Text</Link></li>
    <li><Link className={activeLink === 'aisticker' ? 'dashActive' : ''} onClick={() =>{handleLinkClick('aisticker');setActiveLink("sticker")}} ><SmileySticker size={32}  className="menuIcn"/> Sticker</Link></li>
    <li><Link className={activeLink === 'aimusic' ? 'dashActive' : ''} onClick={() => {handleLinkClick('aimusic');setActiveLink("music")}} ><Headphones size={32}  className="menuIcn"/> Music</Link></li>
    <li><Link className={activeLink === 'import' ? 'dashActive' : ''} onClick={() => {handleLinkClick('import');setActivePanel("import")}} ><DownloadSimple size={32}  className="menuIcn"/> Import</Link></li>

</ul>
    </>
);
}

export default BottomMenu;
