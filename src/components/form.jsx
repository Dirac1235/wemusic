import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setListened, setQueryData, setSongs } from "./redux/actions";
import { PropTypes } from "prop-types";
import { Navigate, redirect } from "react-router-dom";
export function Form({ handleEdit, onCloseSong }) {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const listened = useSelector((state) => state.listened);
  const [redirectit, setRedirect] = useState(false);
  const selectedId = useSelector((state) => state.selectedId);

  const selected = songs.filter((song) => song.id == selectedId)[0];

  const [value, setValue] = useState({
    id: "",
    title: "",
    preview: "",
    artist: {
      name: "",
    },
    album: {
      cover: "",
    },
  });
  useEffect(
    function () {
      if (selected) {
        setValue(selected);
      }
    },
    [selected]
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split(".");

    if (child) {
      setValue((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value,
        },
      }));
    } else {
      setValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  function handleTheEdit(e) {
    e.preventDefault();
    const modified = songs.filter((song) => song.id !== selectedId);
    const isListened = listened.map((song) => song.id).includes(selectedId);
    const modifiedlistned = listened.filter((song) => song.id !== selectedId);

    modified.unshift(value);
    modifiedlistned.unshift(value);

    dispatch(setSongs(modified));
    dispatch(setQueryData(modified));
    isListened && dispatch(setListened(modifiedlistned));
    handleEdit();
  }
  useEffect(
    function () {
      async function testfun() {
        
        return null;
      }
      testfun();
    },
    [redirectit]
  );
  if (redirectit) {
    return <Navigate to="/" />
  }

  function handleCreate(e) {
    e.preventDefault();
    const modified = songs;
    modified.unshift(value);
    dispatch(setSongs(modified));
    dispatch(setQueryData(modified));
    setRedirect(true);
  }

  return (
    <>
      {selected && (
        <button className="btn-back" onClick={onCloseSong}>
          &larr;
        </button>
      )}
      <form className="formf">
        {!selected && <h1> Create Song </h1>}
        <label htmlFor="title" className="labelf">
          Title
        </label>
        <input
          className="inputf"
          type="text"
          name="title"
          id="title"
          value={value.title}
          onChange={handleChange}
        />
        <label htmlFor="body" className="labelf">
          Artist Name
        </label>
        <input
          className="inputf"
          type="text"
          name="artist.name"
          id="body"
          value={value.artist.name}
          onChange={handleChange}
        />
        <label htmlFor="body" className="labelf">
          Image Url
        </label>
        <input
          className="inputf"
          type="text"
          name="album.cover"
          id="body"
          value={value.album.cover}
          onChange={handleChange}
        />
        <label htmlFor="body" className="labelf">
          Song Url
        </label>
        <input
          className="inputf"
          type="text"
          name="preview"
          id="body"
          value={value.preview}
          onChange={handleChange}
        />
        {selected ? (
          <button className="btn-edit" type="submit" onClick={handleTheEdit}>
            Edit
          </button>
        ) : (
          <button className="btn-edit" type="submit" onClick={handleCreate}>
            Create
          </button>
        )}
      </form>
    </>
  );
}
Form.propTypes = {
  handleEdit: PropTypes.func,
  onCloseSong: PropTypes.func,
};
