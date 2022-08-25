import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function Songs({
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
        .slice(-1)
    );
  };

  const switchMusic = (direction) => {
    songs.map((song, index) => {
      if (song.id === currentSong.id) {
        if (direction) {
          index--;
        } else {
          index++;
        }
        if (index !== -1 && index !== songs.length) {
          songs[index].active = true;
          setCurrentSong(songs[index]);
          musicRef.current.paused ? setIsPlaying(true) : setIsPlaying(true);
        }
      }
      return index;
    });
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
            <h4>{getTime(durationTime) ? getTime(durationTime) : "0:00"}</h4>
          </div>
        </div>
        <audio
          ref={musicRef}
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          src={audio}
        ></audio>
        <div className="play-control">
          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={() => switchMusic(true)}
          />
          <FontAwesomeIcon onClick={play} icon={isPlaying ? faPause : faPlay} />
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={() => switchMusic(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Songs;
