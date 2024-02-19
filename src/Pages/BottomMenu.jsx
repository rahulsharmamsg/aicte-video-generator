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
    <li><Link className={activeLink === 'landscapeVideo' ? 'dashActive' : ''} onClick={() => setActivePanel("avatars")} to="/dashboard/landscapeVideo"><User size={32}  className="menuIcn"/> Avatars</Link></li>
    <li><Link className={activeLink === 'aitemplate' ? 'dashActive' : ''} onClick={() => setActivePanel("template")} ><FileVideo size={32} className="menuIcn" /> Template</Link></li>
    <li><Link className={activeLink === 'aibackground' ? 'dashActive' : ''} onClick={() => setActivePanel("background")} ><SelectionBackground size={32}  className="menuIcn"/> Background</Link></li>
    <li><Link className={activeLink === 'landscapeText' ? 'dashActive' : ''} onClick={() => setActivePanel("text")} ><TextAa size={32}  className="menuIcn"/> Text</Link></li>
    <li><Link className={activeLink === 'aisticker' ? 'dashActive' : ''} onClick={() =>setActiveLink("sticker")} ><SmileySticker size={32}  className="menuIcn"/> Sticker</Link></li>
    <li><Link className={activeLink === 'aimusic' ? 'dashActive' : ''} onClick={() => setActiveLink("music")} ><Headphones size={32}  className="menuIcn"/> Music</Link></li>
    <li><Link onClick={() => setActiveLink("import")} ><DownloadSimple size={32}  className="menuIcn"/> Import</Link></li>

</ul>
    </>
);
}

export default BottomMenu;
