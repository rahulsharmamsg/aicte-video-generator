import React from "react";
import { usePlayer } from "../Player.context";

const Pitch = () => {
  const { pitch, changePitch } = usePlayer();

  return (
    <div>
  
      
        <p className="sppedDivtxt">
                      Pitch <span>{pitch}%</span>
                    </p>
       
          <input
            onChange={changePitch}
            type="range"
            autoFocus
            min="0.1"
            max="2.0"
            name="pitchSlider"
            value={pitch}
            id="pitchSlider"
            step="0.01"
            list="pitchrange"
            className="rangeInpt" 
          />
          <datalist id="pitchrange">
            <option value="0.1" label="0" />
            <option value="0.5" />
            <option value="1.0" />
            <option value="1.5" />
            <option value="2.0" label="2" />
          </datalist>
        
   
    </div>
  );
};

export default Pitch;
