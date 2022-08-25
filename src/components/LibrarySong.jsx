import React from "react";

function LibrarySong({
  song,
  songs,
  index,
  setCurrentSong,
  musicRef,
  isPlaying,
  setSongs,
}) {
  let { name, artist, cover, active } = song;

  const indeX = (index) => {
    songs.map((song) => {
      song.active = false;
      return song;
    });
    songs[index].active = true;
    if (active) {
      setSongs([...songs]);
    }
    setCurrentSong(songs[index]);
    if (isPlaying) {
      musicRef.current.pause();
      setTimeout(() => {
        musicRef.current.play();
      });
    }
  };

  return (
    <div
      className={`library-song ${active ? "selected-song" : ""}`}
      onClick={() => {
        indeX(index);
      }}
    >
      <div className="library-song-img">
        <img src={cover} alt="" width={40} height={40} />
      </div>
      <div className="library-song-descrip">
        <h4>{name}</h4>
        <p>{artist}</p>
      </div>
    </div>
  );
}

export default LibrarySong;
