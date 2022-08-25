import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  songs,
  setSongs,
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
    <div
      className="library-container"
      style={{ background: bg ? "yellow" : "#fff" }}
    >
      <div className="top">
        <h1>Library</h1>
        <button onClick={() => setLibrayModal(!librayModal)}>X</button>
      </div>
      {songs.map((song, index) => {
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
            setSongs={setSongs}
          />
        );
      })}
    </div>
  );
}

export default Library;
