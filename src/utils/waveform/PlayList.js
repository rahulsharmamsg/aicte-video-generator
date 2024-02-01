import React from "react";
import propTypes from 'prop-types'
const PlayList = ({ tracks, selectedTrack, setSelectedTrack }) => {
  return (
    <div className="playlist">
      {tracks.map(track => (
        <div
          key={track.id}
          className={
            track.id === selectedTrack.id
              ? "playlist-item selected"
              : "playlist-item"
          }
          onClick={() => setSelectedTrack(track)}
        >
          {track.title}
        </div>
      ))}
    </div>
  );
};
PlayList.propTypes={
    tracks: propTypes.any.isRequired,
    selectedTrack: propTypes.any.isRequired,
    setSelectedTrack: propTypes.any.isRequired
}

export default PlayList;
