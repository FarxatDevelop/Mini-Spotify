import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function Song({
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  musicRef,
  duratinRef,
  songs,
}) {
  // state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    durationTime: 0,
  });

  // function
  const play = () => {
    if (musicRef.current.paused) {
      musicRef.current.play();
      setIsPlaying(true);
    } else {
      musicRef.current.pause();
      setIsPlaying(false);
    }
  };

  const timeUpdateHandler = (e) => {
    setSongInfo({
      ...songInfo,
      currentTime: e.target.currentTime,
      durationTime: e.target.duration,
    });
    musicRef.current.paused ? setIsPlaying(false) : setIsPlaying(true);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) +
      ":" +
      Math.floor(time % 60)
        .toString()
        .slice(-2)
    );
  };

  const DragHandler = (e) => {
    musicRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  const { currentTime, durationTime } = songInfo;
  const { audio } = currentSong;
  return (
    <div className="player-container">
      <div className="container">
        <div className="time-control">
          <div className="time">
            <h4>{getTime(currentTime)}</h4>
          </div>
          <div className="input-range">
            <input
              type="range"
              min={0}
              value={currentTime}
              max={Math.floor(durationTime) ? Math.floor(durationTime) : "100"}
              ref={duratinRef}
              onChange={DragHandler}
            />
          </div>
          <div className="time">
            <h4>{getTime(durationTime)}</h4>
          </div>
        </div>
        <audio
          ref={musicRef}
          onTimeUpdate={timeUpdateHandler}
          src={audio}
          onLoadedMetadata={timeUpdateHandler}
        ></audio>
        <div className="play-control">
          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={() => setCurrentSong(songs[1])}
          />
          <FontAwesomeIcon onClick={play} icon={isPlaying ? faPause : faPlay} />
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={() => {
              setCurrentSong(songs[3]);
              if (!isPlaying) {
                musicRef.current.play();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Song;
