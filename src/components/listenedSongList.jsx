import PropTypes from "prop-types";
import img from "../../images/pink.webp";
import { useDispatch, useSelector } from "react-redux";
import { SongDetails } from "./songDetails";
import { setSelectedId } from "./redux/actions";
import { SummaryDiv, SummaryH } from "./emotionStyle/emotionStyle";

export function ListenedSongsList({
  onDeleteListened,
  onCloseSong,
  onAddListened,
}) {
  const listened = useSelector((state) => state.listened);

  return (
    <ul className="list">
      {listened.map((song) => (
        <ListenedSong
          song={song}
          key={song.id}
          onDeleteListened={onDeleteListened}
          onCloseSong={onCloseSong}
          onAddListened={onAddListened}
          listened={listened}
        />
      ))}
    </ul>
  );
}

function ListenedSong({
  song,
  onDeleteListened,
  onAddListened,
  onCloseSong,
  listened,
}) {
  const selectedId = useSelector((state) => state.selectedId);
  const dispatch = useDispatch();
  return !selectedId ? (
    <li>
      <button className="btn-delete" onClick={() => onDeleteListened(song.id)}>
        X
      </button>
      <img src={img} alt={`${song.title} poster`} />
      <h3 onClick={() => dispatch(setSelectedId(song.id))}>{song.title}</h3>
      <div onClick={() => dispatch(setSelectedId(song.id))}>
        <p>
          <span>{song.body}</span>
        </p>
      </div>
    </li>
  ) : (
    <SongDetails
      selectedId={selectedId}
      onCloseSong={onCloseSong}
      onAddListened={onAddListened}
      listened={listened}
    />
  );
}

export function ListenedSummary() {
  return (
    <SummaryDiv className="summary">
      <SummaryH>Songs you have listened</SummaryH>
    </SummaryDiv>
  );
}

ListenedSongsList.propTypes = {
  listened: PropTypes.array,
  onDeleteListened: PropTypes.func,

  onAddListened: PropTypes.func,
  onCloseSong: PropTypes.func,
};
ListenedSong.propTypes = {
  song: PropTypes.object,
  onDeleteListened: PropTypes.func,
  listened: PropTypes.array,
  onAddListened: PropTypes.func,
  onCloseSong: PropTypes.func,
};
