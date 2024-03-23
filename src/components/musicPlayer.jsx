import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ song, onNextClick, onPrevClick }) {
  const [songUrl, setSongUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const songPlayed = useRef(null);
  const progress = useRef(null);
  // Function to fetch the song from API
  useEffect(
    function () {
      setSongUrl(song.preview);
    },
    [song.preview]
  );

  useEffect(() => {
    console.log(songPlayed);

    const audio = songPlayed.current;
    audio?.load();

    const handleLoadedMetaData = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    if (songUrl) {
      audio?.addEventListener("loadedmetadata", handleLoadedMetaData);
      audio?.addEventListener("timeupdate", handleTimeUpdate);

      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }

      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetaData);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [songUrl, isPlaying]);

  // Function to toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div id="boxes">
        <div id="player02" className="player horizontal">
          <div className="wrapper">
            <div className="info-wrapper">
              <img src={song?.album?.cover} alt="LogoMusicImage" />

              <div className="info">
                <h1>
                  {song.title}
                  <br />
                </h1>
                <p>{song?.artist?.name}</p>
                {!song.preview && (
                  <p style={{ color: "black" }}>Song Preview Not Available</p>
                )}
              </div>
            </div>

            <div className="controls">
              <div className="prev">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  name="prev"
                  onClick={onPrevClick}
                >
                  <path
                    d="M2.33917 13.7397L12.9664 7.38149C13.2293 7.22152 13.5303 7.13509 13.8381 7.13123C14.1458 7.12737 14.4489 7.20622 14.7157 7.35955C15.0053 7.52815 15.245 7.77036 15.4107 8.0616C15.5763 8.35284 15.6619 8.68272 15.6588 9.01775V13.4657L25.8274 7.3798C26.0903 7.21983 26.3914 7.13341 26.6991 7.12955C27.0068 7.12568 27.3099 7.20454 27.5768 7.35786C27.8663 7.52646 28.1061 7.76867 28.2717 8.05991C28.4373 8.35115 28.5229 8.68103 28.5198 9.01606V21.4512C28.5231 21.7863 28.4376 22.1163 28.2719 22.4077C28.1063 22.699 27.8664 22.9413 27.5768 23.1099C27.3099 23.2632 27.0068 23.3421 26.6991 23.3382C26.3914 23.3344 26.0903 23.2479 25.8274 23.088L15.6588 16.9993V21.4489C15.6625 21.7844 15.5771 22.1149 15.4114 22.4067C15.2458 22.6985 15.0057 22.9411 14.7157 23.1099C14.4489 23.2632 14.1458 23.3421 13.8381 23.3382C13.5303 23.3344 13.2293 23.2479 12.9664 23.088L2.33917 16.7298C2.08653 16.5715 1.87825 16.3516 1.73386 16.0908C1.58948 15.83 1.51373 15.5368 1.51373 15.2387C1.51373 14.9406 1.58948 14.6473 1.73386 14.3865C1.87825 14.1257 2.08653 13.9058 2.33917 13.7476V13.7397Z"
                    fill="#E1E1E6"
                  />
                </svg>
              </div>
              <div className="play" onClick={togglePlay}>
                {isPlaying ? (
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => togglePlay}
                  >
                    <path
                      d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                      fill="#cfcfcf"
                    />{" "}
                    <path
                      d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                      fill="#cfcfcf"
                    />
                  </svg>
                ) : (
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => togglePlay}
                  >
                    <path
                      d="M8.32137 25.586C7.9759 25.5853 7.63655 25.4948 7.33669 25.3232C6.66148 24.9406 6.24173 24.1978 6.24173 23.3915V7.07398C6.24173 6.26542 6.66148 5.52494 7.33669 5.14232C7.64369 4.96589 7.99244 4.87516 8.3465 4.87961C8.70056 4.88407 9.04692 4.98354 9.34938 5.16764L23.2952 13.5155C23.5859 13.6977 23.8255 13.9508 23.9916 14.251C24.1577 14.5511 24.2448 14.8886 24.2448 15.2316C24.2448 15.5747 24.1577 15.9121 23.9916 16.2123C23.8255 16.5125 23.5859 16.7655 23.2952 16.9478L9.34713 25.2979C9.0376 25.485 8.68307 25.5846 8.32137 25.586V25.586Z"
                      fill="#E1E1E6"
                    />
                  </svg>
                )}
              </div>
              <div className="next" name="next" onClick={onNextClick}>
                <svg
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.1426 13.7397L16.5154 7.38149C16.2525 7.22152 15.9514 7.13509 15.6437 7.13123C15.336 7.12737 15.0329 7.20622 14.766 7.35955C14.4765 7.52815 14.2368 7.77036 14.0711 8.0616C13.9055 8.35284 13.8199 8.68272 13.823 9.01775V13.4657L3.65435 7.3798C3.39144 7.21983 3.0904 7.13341 2.78268 7.12955C2.47495 7.12568 2.17183 7.20454 1.905 7.35786C1.61547 7.52646 1.37571 7.76867 1.21008 8.05991C1.04445 8.35115 0.958845 8.68103 0.961955 9.01606V21.4512C0.958745 21.7863 1.0443 22.1163 1.20994 22.4076C1.37558 22.699 1.61538 22.9413 1.905 23.1099C2.17183 23.2632 2.47495 23.3421 2.78268 23.3382C3.0904 23.3344 3.39144 23.2479 3.65435 23.088L13.823 16.9993V21.4489C13.8194 21.7844 13.9048 22.1149 14.0704 22.4066C14.2361 22.6984 14.4761 22.9411 14.766 23.1099C15.0329 23.2632 15.336 23.3421 15.6437 23.3382C15.9514 23.3344 16.2525 23.2479 16.5154 23.088L27.1426 16.7298C27.3953 16.5715 27.6035 16.3516 27.7479 16.0908C27.8923 15.83 27.968 15.5368 27.968 15.2387C27.968 14.9406 27.8923 14.6473 27.7479 14.3865C27.6035 14.1257 27.3953 13.9058 27.1426 13.7476V13.7397Z"
                    fill="#E1E1E6"
                  />
                </svg>
              </div>
            </div>

            <div className="track-time">
              <input
                type="range"
                className="track"
                ref={progress}
                max={duration}
                value={currentTime}
                onChange={(e) => {
                  songPlayed.current.currentTime = e.target.value;
                }}
              />
              <div className="time">
                <div className="total-time">
                  {songPlayed?.current?.currentTime}
                </div>
                <div className="last-time">{songPlayed?.current?.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Audio element to play the song */}
      {songUrl && (
        <audio autoPlay={isPlaying} ref={songPlayed} id="audioEl">
          <source src={songUrl} type="audio/mpeg" />
        </audio>
      )}
    </>
  );
}
MusicPlayer.propTypes = {
  song: PropTypes.object,
  onNextClick: PropTypes.func,
  onPrevClick: PropTypes.func,
};
