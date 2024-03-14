import PropTypes from "prop-types";
import img from "../assets/img.jpg"
export function ListenedSongsList({ listened, onDeleteListened }) {
  listened = listened || [];

  return (
    <ul className="list">
      {listened.map((song) => (
        <ListenedSong
          song={song}
          key={song.id}
          onDeleteListened={onDeleteListened}
        />
      ))}
    </ul>
  );
}

function ListenedSong({ song, onDeleteListened }) {
  return (
    <li>
      <button
          className="btn-delete"
          onClick={() => onDeleteListened(song.id)}
        >
          X
        </button>
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

export function ListenedSummary() {
  return (
    <div className="summary">
      <h2>Songs you have listened</h2>
    </div>
  );
}

ListenedSongsList.propTypes = {
  listened: PropTypes.array,
  onDeleteListened: PropTypes.func,
};
ListenedSong.propTypes = {
  song: PropTypes.object,
  onDeleteListened: PropTypes.func,
};

