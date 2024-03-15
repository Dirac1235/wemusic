import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form } from "./form";
import { Loader } from "./Loader";
import { useSelector } from "react-redux";
import {
  DetailsOverview,
  DetailsOverviewH,
  DetailsSection,
  DetailsDiv,
} from "./emotionStyle/emotionStyle";
export function SongDetails({
  selectedId,
  onCloseSong,
  onAddListened,
  listened,
}) {
  const songs = useSelector((state) => state.songs);

  listened = listened || [];
  const [song, setSong] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const isListened = listened.map((song) => song.id).includes(selectedId);

  const { userId, title, body } = song;

  function handleAdd() {
    const newListenedSong = {
      userId,
      id: selectedId,
      title,
      body,
    };
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

  useEffect(
    function () {
      if (!title) return;
      document.title = `songs | ${title}`;

      return function () {
        document.title = "Wemusic";
      };
    },
    [title]
  );

  return (
    <DetailsDiv>
      {isLoading ? (
        <Loader />
      ) : !edit ? (
        <>
          <header>
            <button className="btn-back" onClick={onCloseSong}>
              &larr;
            </button>

            <DetailsOverview className="details-overview">
              <DetailsOverviewH>{title}</DetailsOverviewH>
            </DetailsOverview>
          </header>

          <DetailsSection>
            <p>{body}</p>
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
