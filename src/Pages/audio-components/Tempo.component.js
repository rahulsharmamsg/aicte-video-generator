import React from "react";
import { usePlayer } from "../Player.context";

const Tempo = () => {
  const { tempo, changeTempo } = usePlayer();
  return (
    <div>
       
        <p className="sppedDivtxt">
                      Speed <span>{tempo}x</span>
                    </p>
          <input
            type="range"
            onChange={changeTempo}
            autoFocus
            min="0.1"
            max="4.0"
            name="tempoSlider"
            value={tempo}
            id="tempoSlider"
            step="0.01"
            list="temporange"
            className="rangeInpt" 
          />
          <datalist id="temporange">
            <option value="0.1" label="0" />
            <option value="0.5" />
            <option value="1.0" />
            <option value="1.5" />
            <option value="2.0" />
            <option value="2.5" />
            <option value="3.0" />
            <option value="3.5" />
            <option value="4.0" label="4" />
          </datalist>
        
    </div>
  );
};

export default Tempo;
