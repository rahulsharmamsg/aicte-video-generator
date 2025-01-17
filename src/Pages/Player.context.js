import React, { createContext, useMemo, useState, useContext } from "react";
import { PitchShifter } from "soundtouchjs";

export const PlayerContext = createContext();


export const PlayerProv = ({ audioCtx, gainNode, ...props }) => {
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [tempo, setTempo] = useState(1.0);
  const [pitch, setPitch] = useState(1.0);
  const [semitone, setSemitone] = useState(0);
  const [volume, setVolume] = useState(1.0);
  const [playHead, setPlayHead] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [progress, setProgress] = useState(0);
  const [shifter, setShifter] = useState();

  const value = useMemo(
    () => ({
      loading,
      setLoading,
      playing,
      setPlaying,
      tempo,
      setTempo,
      pitch,
      setPitch,
      semitone,
      setSemitone,
      volume,
      setVolume,
      playHead,
      setPlayHead,
      duration,
      setDuration,
      progress,
      setProgress,
      audioCtx,
      gainNode,
      shifter,
      setShifter
    }),
    [
      loading,
      setLoading,
      playing,
      setPlaying,
      tempo,
      setTempo,
      pitch,
      setPitch,
      semitone,
      setSemitone,
      volume,
      setVolume,
      playHead,
      setPlayHead,
      duration,
      setDuration,
      progress,
      setProgress,
      audioCtx,
      gainNode,
      shifter,
      setShifter
    ]
  );

  return <PlayerContext.Provider value={value} {...props} />;
};

export const usePlayer = () => {
  const {
    loading,
    setLoading,
    playing,
    setPlaying,
    tempo,
    setTempo,
    pitch,
    setPitch,
    semitone,
    setSemitone,
    volume,
    setVolume,
    playHead,
    setPlayHead,
    duration,
    setDuration,
    progress,
    setProgress,
    audioCtx,
    gainNode,
    shifter,
    setShifter
  } = useContext(PlayerContext);

  const onPlay = ({ formattedTimePlayed, percentagePlayed }) => {
    setPlayHead(formattedTimePlayed);
    setProgress(percentagePlayed);
    console.log(percentagePlayed)

    if (percentagePlayed > 99.9) {
      setProgress(0);
      setPlayHead(0);
      pauseAudio();
    }
  };


  const newShifter = buffer => {
    const myShifter = new PitchShifter(audioCtx, buffer, 16384);
    myShifter.tempo = tempo;
    myShifter.pitch = pitch;
    myShifter.on("play", onPlay);
    setDuration(myShifter.formattedDuration);
    setShifter(myShifter);
  };

  const onLoad = ({ target: { result: buffer } }) => {
    if (shifter) {
      shifter.off();
    }
    if (buffer) {
      audioCtx.decodeAudioData(buffer).then(audioBuffer => {
        newShifter(audioBuffer);
      });
    }
    setLoading(false);
  };

  const loadFile = file => {
    console.log(typeof(file))
    setLoading(true);
    const fileReader = new FileReader();
    fileReader.onload = onLoad;
    try {
      fileReader.readAsArrayBuffer(file);
    } catch (err) {
      alert(err);
    }
  };

  const playAudio = () => {
    if (shifter) {
      shifter.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      audioCtx.resume();
      setPlaying(true);
    }
  };

  const pauseAudio = (isPlaying = false) => {
    if (shifter) {
      shifter.disconnect();
      if (!isPlaying) {
        setPlaying(false);
      }
    }
  };

  const resetPlayHead = perc => {
    pauseAudio(playing);
    if (shifter) {
      shifter.percentagePlayed = perc;
      setPlayHead(shifter.formattedTimePlayed);
    }
    setProgress(0);
    if (playing) {
      playAudio();
    }
  };

  return {
    loading,
    playing,
    duration,
    tempo,
    pitch,
    semitone,
    volume,
    playHead,
    progress,
    loadFile,
    play: playAudio,
    pause: pauseAudio,
    changeVolume: ({ target: { value } }) => {
      setVolume(value);
      gainNode.gain.volume = value;
    },
    changeSemitone: ({ target: { value } }) => {
      setSemitone(value);
      if (shifter) {
        shifter.pitchSemitones = value;
      }
    },
    changePitch: ({ target: { value } }) => {
    
      setPitch(value);
      if (shifter) {
        shifter.pitch = value;
      }
    },
    changeTempo: ({ target: { value } }) => {
      setTempo(value);
      if (shifter) {
        shifter.tempo = value;
      }
    },
    resetPlayHead,
    shifter
  };
};