import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form } from "./form";
import { useDispatch, useSelector } from "react-redux";
import {
  DetailsOverview,
  DetailsSection,
  DetailsDiv,
} from "./emotionStyle/emotionStyle";
import MusicPlayer from "./musicPlayer";
import { setSelectedId } from "./redux/actions";
export function SongDetails({
  selectedId,
  onCloseSong,
  onAddListened,
  listened,
}) {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  listened = listened || [];
  const [song, setSong] = useState({});
  const [edit, setEdit] = useState(false);
  const isListened = listened.map((song) => song.id).includes(selectedId);

  function handleNextClick() {
    const newId = getIndexById(songs, selectedId);
    dispatch(setSelectedId(songs[newId + 1].id));
}

function handlePrevClick() {
    const newId = getIndexById(songs, selectedId);
    dispatch(setSelectedId(songs[newId - 1].id));
}
  function getIndexById(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return i; // Return index if id matches
      }
    }
    return -1; // Return -1 if id is not found
  }

  function handleAdd() {
    const newListenedSong = song;
    console.log(newListenedSong);
    isListened ? {} : onAddListened(newListenedSong);
    onCloseSong();
  }
  function handleEdit() {
    setEdit((prev) => !prev);
  }
  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          onCloseSong();
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseSong]
  );

  useEffect(
    function () {
      const selected = songs.filter((song) => song.id == selectedId);
      setSong(selected[0]);
    },
    [selectedId, songs]
  );

  return (
    <DetailsDiv>
      {!edit ? (
        <>
          <header>
            <button className="btn-back" onClick={onCloseSong}>
              &larr;
            </button>

            <DetailsOverview className="details-overview"></DetailsOverview>
          </header>

          <DetailsSection>
            <MusicPlayer song={song} onNextClick={handleNextClick} onPrevClick={handlePrevClick} />
            <button
              className="btn-add"
              onClick={() => setEdit((prev) => !prev)}
            >
              Edit
            </button>
            {!isListened && (
              <button className="btn-add" onClick={handleAdd}>
                + Add to list
              </button>
            )}
          </DetailsSection>
        </>
      ) : (
        <Form
          onCloseSong={handleEdit}
          handleEdit={() => setEdit((prev) => !prev)}
        />
      )}
    </DetailsDiv>
  );
}

SongDetails.propTypes = {
  selectedId: PropTypes.any,
  onCloseSong: PropTypes.func,
  onAddListened: PropTypes.func,
  listened: PropTypes.any,
};
