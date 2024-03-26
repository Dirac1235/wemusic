import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { SongDetails } from "./songDetails";
import { setSelectedId } from "./redux/actions";
import { DeleteButton, SummaryDiv, SummaryH } from "./emotionStyle/emotionStyle";

export function ListenedSongsList({
  onDeleteListened,
  onCloseSong,
  onAddListened,
}) {
  const listened = useSelector((state) => state.listened);

  return (
    <ul className="list list-listened">
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
    <li className="list-listened">
      <DeleteButton onClick={() => onDeleteListened(song.id)}>
        X
      </DeleteButton>
      <img src={song?.album?.cover} alt={`${song.title} poster`} />
      <h3 onClick={() => dispatch(setSelectedId(song.id))}>{song.title}</h3>
      <div onClick={() => dispatch(setSelectedId(song.id))}>
        <p>
          <span>{song.artist.name}</span>
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
    <SummaryDiv>
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
