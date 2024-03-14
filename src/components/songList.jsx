import PropTypes from "prop-types";
import img from "../assets/img.jpg"
export function SongList({ songs, onSelectSong }) {
  return (
    <ul className="list list-songs">
      {songs?.map((song) => (
        <Song song={song} key={song.id} onSelectSong={onSelectSong} />
      ))}
    </ul>
  );
}

// song card 
function Song({ song, onSelectSong }) {
  return (
    <li onClick={() => onSelectSong(song.id)}>
      <img src={img} alt={`${song.title} poster`} />
      <h3>{song.title}</h3>
      <div>
        <p>
          <span>{song.body}</span>
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
  songs: PropTypes.array,
  onSelectSong: PropTypes.func,
};
