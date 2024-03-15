import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setQueryData } from "./redux/actions";
import styled from "@emotion/styled";
const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 7.2rem;
  padding: 0 3.2rem;
  background-color: var(--color-primary);
  border-radius: 0.9rem;
`;
export function NavBar({ children }) {
  return (
    <Nav className="nav-bar">
      <Logo />
      {children}
    </Nav>
  );
}
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const LogoSpan = styled.span`
  font-size: 3.2rem;
`;
const LogoH = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #fff;
`;
export function Logo() {
  return (
    <LogoDiv>
      <LogoSpan role="img">🎵</LogoSpan>
      <LogoH>Wemusic</LogoH>
    </LogoDiv>
  );
}

export function Search({ songs }) {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const holderRef = useRef([...songs]);
  const [query, setQuery] = useState({
    title: "",
  });

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl.current) return;

        if (e.code === "Enter") {
          inputEl.current.focus();
          dispatch(setQuery(""));
        }
      }
      console.log(holderRef.current);

      const filteredSongs = songs.filter((song) => song.title === query);
      query
        ? dispatch(setQueryData(filteredSongs))
        : dispatch(setQueryData(songs));
      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [query]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search songs..."
      value={query.title}
      onChange={(e) => dispatch(setQuery(e.target.value))}
      ref={inputEl}
    />
  );
}
const NumResultsP = styled.p`
justify-self: end;
font-size: 1.8rem;
`
export function NumResults({ queryData }) {
  queryData = queryData || [];
  return (
    <NumResultsP >
      Found <strong>{queryData.length}</strong> results
    </NumResultsP>
  );
}

NavBar.propTypes = {
  children: PropTypes.any,
};
Search.propTypes = {
  songs: PropTypes.any,
};
NumResults.propTypes = {
  queryData: PropTypes.array,
};
