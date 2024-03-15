import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setListened, setQueryData, setSongs } from "./redux/actions";
import { PropTypes } from "prop-types";
export function Form({ handleEdit, onCloseSong }) {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const listened = useSelector((state) => state.listened);

  const selectedId = useSelector((state) => state.selectedId);

  const selected = songs.filter((song) => song.id == selectedId);
  console.log(selected);
  const [value, setValue] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });
  useEffect(function () {
    setValue(selected[0]);
  }, []);
  function handleChange(e) {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const modified = songs.filter((song) => song.id !== selectedId);
    const modifiedlistned = listened.filter((song) => song.id !== selectedId);

    modified.unshift(value);
    modifiedlistned.unshift(value);

    dispatch(setSongs(modified));
    dispatch(setQueryData(modified));
    dispatch(setListened(modifiedlistned))
    handleEdit();
  }

  return (
    <>
      <button className="btn-back" onClick={onCloseSong}>
              &larr;
            </button>
      <form className="formf">
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
          Body
        </label>
        <input
          className="inputf"
          type="text"
          name="body"
          id="body"
          value={value.body}
          onChange={handleChange}
        />
        <button className="btn-edit" type="submit" onClick={handleSubmit}>
          Edit
        </button>
      </form>
    </>
  );
}
Form.propTypes = {
  handleEdit: PropTypes.func,
  onCloseSong: PropTypes.func
};
