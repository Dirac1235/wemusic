import { useSelector, useDispatch } from "react-redux";
import { setQueryData, setSongs } from "./redux/actions";
import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";
import { useState } from "react";
export function CreateForm() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);

  const [redirectit, setRedirect] = useState(false);

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

  if (redirectit) {
    return <Navigate to="/" />;
  }

  function handleCreate(e) {
    e.preventDefault();
    const modified = songs;
    modified.unshift(value);
    dispatch(setSongs(modified));
    dispatch(setQueryData(modified));
    setRedirect(true);
  }
  function handleBack() {
    setRedirect(true);
  }
  return (
    <>

      <button className="btn-create-back" onClick={handleBack}>
        &larr;
      </button>
      <form className=" create-form">
        <h1> Create Song </h1>
        <label htmlFor="title" className="labelf">
          ID
        </label>
        <input
          className="inputf"
          type="text"
          name="id"
          id="id"
          value={value.id}
          onChange={handleChange}
        />
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
        <label htmlFor="body" className="labelf">
          Song Duration
        </label>
        <input
          className="inputf"
          type="text"
          name="duration"
          id="body"
          value={value.duration}
          onChange={handleChange}
        />

        <button className="btn-edit" type="submit" onClick={handleCreate}>
          Create
        </button>
      </form>
    </>
  );
}
CreateForm.propTypes = {
  onCloseSong: PropTypes.func,
};
