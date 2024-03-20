import React, { useEffect, useState } from 'react'
import { PaperPlaneRight, Password, FileText, FileVideo, FolderNotchPlus, Chalkboard, User, SelectionBackground, TextAa, SmileySticker, Headphones, DownloadSimple, MagnifyingGlass, TextT, ArrowsClockwise, ClockClockwise, Headset, SelectionPlus, Translate, ArrowsLeftRight, PlayCircle } from "phosphor-react";
import { Link } from 'react-router-dom';
function BottomMenu({ setActivePanel }) {
  const [activeLink, setActiveLink] = useState('');
  const handleLinkClick = (link) => {
    setActiveLink(link);
    localStorage.setItem("currentTab", link)
  }
  useEffect(() => {
    let tab = localStorage.getItem("currentTab")
    if (tab) {
      setActiveLink(tab)
    }
  }, [])



  return (
    <>
      <ul className="dashbrdMenu">
        <li><Link className={activeLink === 'landscapeVideo' ? 'dashActive' : ''} onClick={() => { handleLinkClick('landscapeVideo'); setActivePanel("avatars") }} ><User size={32} className="menuIcn" /> Avatars</Link></li>
        <li><Link className={activeLink === 'aitemplate' ? 'dashActive' : ''} onClick={() => { handleLinkClick('aitemplate'); setActivePanel("template") }} ><FileVideo size={32} className="menuIcn" /> Template</Link></li>
        <li><Link className={activeLink === 'aibackground' ? 'dashActive' : ''} onClick={() => { handleLinkClick('aibackground'); setActivePanel("background") }} ><SelectionBackground size={32} className="menuIcn" /> Background</Link></li>
        <li><Link className={activeLink === 'landscapeText' ? 'dashActive' : ''} onClick={() => { handleLinkClick('landscapeText'); setActivePanel("text") }} ><TextAa size={32} className="menuIcn" /> Text</Link></li>
        <li><Link className={activeLink === 'aiTalking' ? 'dashActive' : ''} onClick={() => { handleLinkClick('aiTalking'); setActivePanel("talkingavtar") }} ><SelectionBackground size={32} className="menuIcn" /> Talking Avtar</Link></li>
        {/* <li><Link className={activeLink === 'aisticker' ? 'dashActive' : ''} onClick={() =>{handleLinkClick('aisticker');setActiveLink("sticker")}} ><SmileySticker size={32}  className="menuIcn"/> Sticker</Link></li> */}
        {/* <li><Link className={activeLink === 'aimusic' ? 'dashActive' : ''} onClick={() => { handleLinkClick('aimusic'); setActiveLink("aimusic") }} ><Headphones size={32} className="menuIcn" /> Music</Link></li> */}
        <li><Link className={activeLink === 'aimusic' ? 'dashActive' : ''} onClick={() => { handleLinkClick('aimusic'); setActivePanel("aimusic") }} ><Headphones size={32} className="menuIcn" /> Music</Link></li>

        <li><Link className={activeLink === 'import' ? 'dashActive' : ''} onClick={() => { handleLinkClick('import'); setActivePanel("import") }} ><DownloadSimple size={32} className="menuIcn" /> Import</Link></li>
        <li><Link className={activeLink === 'image' ? 'dashActive' : ''} onClick={() => { handleLinkClick('image'); setActivePanel("image") }} ><User size={32} className="menuIcn" /> Image Generation</Link></li>
        <li><Link className={activeLink === 'aivideo' ? 'dashActive' : ''} onClick={() => { handleLinkClick('aivideo'); setActivePanel("aivideo") }} ><User size={32} className="menuIcn" /> Image to Video </Link></li>
        <li><Link className={activeLink === 'textvideo' ? 'dashActive' : ''} onClick={() => { handleLinkClick('textvideo'); setActivePanel("textvideo") }} ><User size={32} className="menuIcn" /> Text to Video</Link></li>
      </ul>
    </>
  );
}

export default BottomMenu;
