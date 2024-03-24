import { useEffect } from "react";
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
import { setSelectedId, setListened } from "./components/redux/actions";
import styled from "@emotion/styled";
import { NotFound } from "./components/notFound";

export default function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const songs = useSelector((state) => state.songs);
  const error = useSelector((state) => state.error);
  const selectedId = useSelector((state) => state.selectedId);
  const listened = useSelector((state) => state.listened);
  const queryData = useSelector((state) => state.queryData);
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

  return (
    <>
      <NavBar>
        <Search songs={songs} />
        <NumResults queryData={queryData} />
      </NavBar>

      <Main>
        <Box>
          {!isLoading ? (
            !error ? (
              queryData && queryData.length > 0 ? (
                <div className="songHolder">
                  <SongList
                    queryData={queryData}
                    onSelectSong={handleSelectSong}
                  />
                </div>
              ) : (
                <NotFound />
              )
            ) : (
              <ErrorMessage message={error} />
            )
          ) : (
            <Loader />
          )}
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
                onDeleteListened={handleDeleteSong}
                onCloseSong={handleCloseSong}
                onAddListened={handleAddSong}
                
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

const MainS = styled.main`
  margin-top: 2.4rem;
  height: calc(100vh - 7.2rem - 3 * 2.4rem);
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`;

function Main({ children }) {
  return <MainS>{children}</MainS>;
}

function Box({ children }) {
  return <div className="box">{children}</div>;
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
