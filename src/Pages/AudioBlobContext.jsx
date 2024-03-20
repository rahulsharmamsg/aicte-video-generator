import { createContext, useEffect, useState } from "react";

export const audioContext = createContext({
    audioBlob:null,
    setAudioBlob: ()=>{

    }
});
export const AudioProvider = ({children})=>{
 const [audioBlob , setAudioBlob] = useState(null);
 const value = {audioBlob,setAudioBlob}
 return (
<audioContext.Provider value={value}>{children}</audioContext.Provider>
 )
}
