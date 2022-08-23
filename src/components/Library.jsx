import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  songs,
  songIndex,
  setSongIndex,
  setCurrentSong,
  currentSong,
  musicRef,
  duratinRef,
  isPlaying,
  librayModal,
  setLibrayModal,
  bg,
}) {



  return (
    <div className="library-container" style={{background: bg ? "yellow" : "#fff"}}>
      <div className="top">
        <h1>Library</h1>
        <button onClick={() => setLibrayModal(!librayModal)}>X</button>
      </div>
      {songs.map((song, index) => {
        song.active = false;
        return (
          <LibrarySong
            songs={songs}
            key={index}
            song={song}
            index={index}
            songIndex={songIndex}
            setSongIndex={setSongIndex}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            musicRef={musicRef}
            duratinRef={duratinRef}
            isPlaying={isPlaying}
          />
        );
      })}
    </div>
  );
}

export default Library;
