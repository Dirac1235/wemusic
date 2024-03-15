import PropTypes from "prop-types";
import img from "../assets/pink.webp";
import styled from "@emotion/styled";
const SummaryDiv = styled.div`
  padding: 2.2rem 3.2rem 1.8rem 3.2rem;
  border-radius: 0.9rem;
  background-color: var(--color-background-100);
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;
`;
const SummaryH = styled.h2`
  text-transform: uppercase;
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
`;

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
      <button className="btn-delete" onClick={() => onDeleteListened(song.id)}>
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
    <SummaryDiv className="summary">
      <SummaryH>Songs you have listened</SummaryH>
    </SummaryDiv>
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
