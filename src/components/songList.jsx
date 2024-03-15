import PropTypes from "prop-types";
import img from "../../images/pink.webp"
export function SongList({ queryData, onSelectSong }) {
  return (
    <ul className="list list-queryData">
      {queryData?.map((song) => (
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
  queryData: PropTypes.array,
  onSelectSong: PropTypes.func,
};
