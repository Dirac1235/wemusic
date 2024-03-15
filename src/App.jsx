import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  ListenedSongsList,
  ListenedSummary,
} from "./components/listenedSongList";
import { Loader } from "./components/Loader";
import { NavBar, Search, NumResults } from "./components/navElements";
import { SongList } from "./components/songList";
import { SongDetails } from "./components/songDetails";

import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoading,
  setSelectedId,
  setListened,
  fetchUserRequest,
} from "./components/redux/actions";

export default function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const songs = useSelector((state) => state.songs);
  const error = useSelector((state) => state.error);
  const selectedId = useSelector((state) => state.selectedId);
  const listened = useSelector((state) => state.listened);
  const queryData = useSelector((state) => state.queryData)
  const dispatch = useDispatch();

  function handleSelectSong(id) {
    dispatch(setSelectedId(id));
  }

  function handleCloseSong() {
    dispatch(setSelectedId(null));
  }

  function handleAddSong(song) {
    const val = [...listened, song];
    dispatch(setListened(val));
  }

  function handleDeleteSong(id) {
    const arr = listened.filter((song) => song.id !== id);
    dispatch(setListened(arr));
  }

  useEffect(
    function () {
      localStorage.setItem("listened", JSON.stringify(listened));
    },
    [listened]
  );

  useEffect(function () {
    dispatch(fetchUserRequest());
    dispatch(setIsLoading(false));
  }, []);

  return (
    <>
      <NavBar>
        <Search songs={songs}/>
        <NumResults queryData={queryData} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <SongList queryData={queryData} onSelectSong={handleSelectSong} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <SongDetails
              selectedId={selectedId}
              onCloseSong={handleCloseSong}
              onAddListened={handleAddSong}
              listened={listened}
            />
          ) : (
            <>
              <ListenedSummary />
              <ListenedSongsList
                listened={listened}
                onDeleteListened={handleDeleteSong}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.any,
};

Box.propTypes = {
  children: PropTypes.any,
};

ErrorMessage.propTypes = {
  message: PropTypes.any,
};
