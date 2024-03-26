import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function SongList({ queryData, onSelectSong }) {
  return (
    <>
      <header className="songs">
        <p>Songs</p>
        <Link className="plus" to="/create">
          +
        </Link>
      </header>
      <ul className="list list-queryData list-songs">
        {queryData?.map((song) => (
          <Song song={song} key={song.id} onSelectSong={onSelectSong} />
        ))}
      </ul>
    </>
  );
}

// song card
function Song({ song, onSelectSong }) {
  function secondsToTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }
  return (
    <li onClick={() => onSelectSong(song.id)}>
      <img  src={song.album.cover} alt={`${song.title} poster`} />
      <h3 style={{ marginLeft: "20px" }}>{song.title}</h3>
      <div>
        <p>
          <span style={{ marginRight: "30px", marginLeft: "10px" }}>
            {song.artist.name}
          </span>
          {secondsToTime(song.duration)}
        </p>
      </div>
    </li>
  );
}
Song.propTypes = {
  song: PropTypes.object,
  onSelectSong: PropTypes.func,
};

SongList.propTypes = {
  queryData: PropTypes.array,
  onSelectSong: PropTypes.func,
};
