import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setQueryData } from "./redux/actions";
import { NumResultsP, LogoDiv, LogoSpan, LogoH, Nav } from "./emotionStyle/emotionStyle";

export function NavBar({ children }) {
  return (
    <Nav className="nav-bar">
      <Logo />
      {children}
    </Nav>
  );
}

export function Logo() {
  return (
    <LogoDiv>
      <LogoSpan role="img">🎵</LogoSpan>
      <LogoH>Wemusic</LogoH>
    </LogoDiv>
  );
}

export function Search({ songs }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    title: "",
  });

  useEffect(
    function () {
      
      
      const filteredSongs = songs.filter((song) => song.title === query);
      query
        ? dispatch(setQueryData(filteredSongs))
        : dispatch(setQueryData(songs));
      
    },
    [query]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search songs..."
      value={query.title}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

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
