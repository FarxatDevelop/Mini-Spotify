import { TbLamp } from "react-icons/tb";
import React from "react";

function Player({ currentSong, librayModal, setLibrayModal, bg, setBg }) {
  const { name, artist, cover } = currentSong;
  return (
    <div className="player">
      <header>
        <button
          className="btn changeTheme"
          onClick={() => {
            setBg(!bg);
          }}
        >
          <TbLamp />
        </button>
        <h3>Mini Spotify</h3>
        <button onClick={() => setLibrayModal(!librayModal)}>Library</button>
      </header>
      <div className="wrapper">
        <div className="music-img">
          <img src={cover} alt="" />
        </div>
        <h1>{name}</h1>
        <h4>{artist}</h4>
      </div>
    </div>
  );
}

export default Player;
