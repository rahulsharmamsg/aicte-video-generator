import { useEffect, useState } from "react";

const useRecorder = () => {
  const [audioURL, setAudioURL] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);
  const [pause, setPause] = useState(false);
  const [resume, setResume] = useState(false);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {

        requestRecorder().then(setRecorder, console.error);
      }
      return;
    }  // Manage recorder state.  
    if (isRecording) {
      if (pause) {
        recorder.pause();
      } else if (resume) {
        recorder.resume();
      } else {
        recorder.start();
      }
    } else {
      recorder.stop();
    }
    // Obtain the audio when ready.  
    const handleData = e => {
      setAudioURL(URL.createObjectURL(e.data));
    }; if (!reset) {
      recorder.addEventListener("dataavailable", handleData);
      return () => recorder.removeEventListener("dataavailable", handleData);
    }
  }, [recorder, isRecording, pause, resume]);
  const startRecording = () => {
    setIsRecording(true);
  }; 
  const stopRecording = () => { 
    setIsRecording(false); 
    setResume(false); 
    setPause(false); 
    setReset(false)
  }; 
  return [audioURL, isRecording, startRecording, stopRecording, pause, setPause, resume, setResume, setIsRecording, setReset];
};
 async function requestRecorder() { 
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); 
  return new MediaRecorder(stream); 
} 
export default useRecorder;