import { useDispatch } from "react-redux";
import { Nav } from "./emotionStyle/emotionStyle";

import { Logo } from "./navElements";

import { setSelectedId } from "./redux/actions";
import { CreateForm } from "./createForm";

export default function Create() {
  const dispatch = useDispatch()
  dispatch(setSelectedId(""))
  return (
    <>
      <Nav>
        <Logo />
      </Nav>
      <CreateForm />
    </>
  );
}
