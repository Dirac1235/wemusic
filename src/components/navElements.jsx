import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setSongs } from "./redux/actions";
import { setQueryData } from "./redux/actions";
export function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export function Logo() {
  return (
    <div className="logo">
      <span role="img">🎵</span>
      <h1>Wemusic</h1>
    </div>
  );
}

export function Search({ songs }) {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const holderRef = useRef([...songs]);
  const [query, setQuery] = useState({
    title: "",
  })
  
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
      query ? dispatch(setQueryData(filteredSongs)) : dispatch(setQueryData(songs));
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

export function NumResults({ queryData }) {
  queryData = queryData || [];
  return (
    <p className="num-results">
      Found <strong>{queryData.length}</strong> results
    </p>
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
