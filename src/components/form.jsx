import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSongs } from "./redux/actions";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
export function Form({ handleEdit }) {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const selectedId = useSelector((state) => state.selectedId);

  const selected = songs.filter((song) => song.id == selectedId);
  console.log(selected);
  const [value, setValue] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });
  useEffect( function () {
    setValue(selected[0])
  },[])
  const handleChange = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(value);
  };
  function handleSubmit(e) {
    e.preventDefault()
    const removed = songs.filter((song) => song.id !== selectedId);
    removed.unshift(value); // Assuming newId and newName are the values you want to insert
    dispatch(setSongs(removed));
    handleEdit()
  }
  const Sform = styled.form`

    display: flex;
    flex-direction: column;
    width: 100%;
    
    justify-content: center;
    align-items: center;
    margin-top:50px;
  `
  const Input = styled.input`
    font-size:1.5rem;
    width: 90%;
    border-radius: 20px;
    margin:20px;
    padding:2rem;
  `
  const Label = styled.label`
    height:100%;
    font-size: 2rem;
  `
  const Button = styled.button`
    width:50%;
    padding:1.5rem;
    border-radius: 2rem;
    background-color:#d9c4e4;
  `
  return (
    <>
      <Sform>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="title"
          id=""
          value={value.title}
          onChange={handleChange}
          
        />
        <Label htmlFor="body">Body</Label>
        <Input
          type="text"
          name="body"
          id=""
          value={value.body}
          onChange={handleChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          Edit
        </Button>
      </Sform>
    </>
  );
}
