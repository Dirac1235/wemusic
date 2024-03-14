import { useEffect, useRef } from "react";
import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
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

export function Search({ query, setQuery }) {
  const inputEl = useRef(null);
  const dispatch = useDispatch()
  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl.current) return;

        if (e.code === "Enter") {
          inputEl.current.focus();
          dispatch(setQuery(""));
          
        }
      }

      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search songs..."
      value={query}
      onChange={(e) => dispatch(setQuery(e.target.value))}
      ref={inputEl}
    />
  );
}

export function NumResults({ songs }) {
  songs = songs || []
  return (
    <p className="num-results">
      Found <strong>{songs.length}</strong> results
    </p>
  );
}
Search.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string,
};
NavBar.propTypes = {
  children: PropTypes.any,
};
NumResults.propTypes = {
  songs: PropTypes.array,
};