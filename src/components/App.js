import React, { useRef, useState } from "react";
import Player from "./Player";
import Songs from "./Songs";
import "../styles/app.css";
import chillHop from "../data/util";
import Library from "./Library";

function App() {
  // State
  const [songs, setSongs] = useState(chillHop());

  const [bg, setBg] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [librayModal, setLibrayModal] = useState(true);

  // Ref
  const musicRef = useRef(null);
  const duratinRef = useRef(null);

  let style = {
    background: bg ? "yellow" : "#fff",
  };

  return (
    <div className="app" style={style}>
      {librayModal ? (
        <Library
          bg={bg}
          songs={songs}
          setCurrentSong={setCurrentSong}
          currentSong={currentSong}
          musicRef={musicRef}
          duratinRef={duratinRef}
          isPlaying={isPlaying}
          setLibrayModal={setLibrayModal}
          librayModal={librayModal}
          setSongs={setSongs}
        />
      ) : (
        ""
      )}
      <div className="right">
        <Player
          currentSong={currentSong}
          librayModal={librayModal}
          setLibrayModal={setLibrayModal}
          bg={bg}
          setBg={setBg}
        />
        <Songs
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          musicRef={musicRef}
          duratinRef={duratinRef}
          songs={songs}
        />
      </div>
    </div>
  );
}

export default App;
