import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSong } from "../../components/services/actions";
import { songs } from "../utils/songs";
import { Song } from "../song/song";
import { SongPopup } from "../song-popup/song-popup";
import { StatsPopup } from "../stats-popup/stats-popup";
import cover from "../../images/cover.jpeg";
import styles from "./playlist.module.css";
import { ArrowButton } from "../arrow/arrowbutton";
import Button from "../button/button";
import Ripple from "../ripple/ripple";

export const Playlist = () => {
  const dispatch = useDispatch();
  const [activeSongOnPage, setActiveSongOnPage] = useState(
    `${songs[0].artist} - ${songs[0].name}`
  );
  const [isStateChanged, setIsStateChanged] = useState(false);
  const [activeSongPopup, setActiveSongPopup] = useState(false);
  const [activeStatsPopup, setActiveStatsPopup] = useState(false);
  const [activePlaylist, setActivePlaylist] = useState(true);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1948px)").matches
  );

  const [matchesSmall, setMatchesSmall] = useState(window.matchMedia("(max-width: 875px)").matches);

  useEffect(() => {
  if(matchesSmall === true ){
    document.querySelector('#svg').setAttribute('width', '100%');
    console.log(document.querySelector('#container').getAttribute('width'))
    //document.getElementById('svg').setAttribute('width', `${widthForSvg}`);
    // document.querySelectorAll('#shape').forEach((el) => console.log(el.getAttribute('d')));
    //widthForSvg && document.querySelectorAll('#shape').forEach((el) => {
    //el.setAttribute('d', `M ${widthForSvg.slice(-2)},0 H 0 V 60 H ${widthForSvg.slice(-2)} V 0 Z`)
   //})
  }
  }, [matchesSmall])

  const song = useSelector((state) => state.song.activeSong);

  const onSongClick = (e) => {
    const newActiveSong = e.target.textContent;
    setActiveSongOnPage(newActiveSong);
  };

  const onLeftArrowClick = (e) => {
    setIsStateChanged(true);
    if (activeStatsPopup === true) {
      setActivePlaylist(true);
      setActiveStatsPopup(false);
    } else {
      setActivePlaylist(false);
      setActiveSongPopup(true);
    }
  };

  const onRightArrowClick = (e) => {
    setIsStateChanged(true);
    if (activeSongPopup === true) {
      setActivePlaylist(true);
      setActiveSongPopup(false);
    } else {
      setActivePlaylist(false);
      setActiveStatsPopup(true);
    }
  };

  useEffect(() => {
    activeSongOnPage !== ""
      ? dispatch(setActiveSong(activeSongOnPage))
      : dispatch(setActiveSong(`${songs[0].artist} - ${songs[0].name}`));
  }, [activeSongOnPage]);

  const buttonleft = document.getElementById("buttonleft");
  const buttonright = document.getElementById("buttonright");

  useEffect(() => {
    if (isStateChanged === true && buttonleft && buttonright) {
      if (activeSongPopup === true) {
        buttonleft.style.visibility = "hidden";
      }
      if (activeStatsPopup === true) {
        buttonright.style.visibility = "hidden";
      }
      if (activePlaylist === true) {
        buttonleft.style.display = "flex";
        buttonleft.style.visibility = "visible";
        buttonright.style.display = "flex";
        buttonright.style.visibility = "visible";
      }
    }
    if (matches && isStateChanged && buttonleft && buttonright) {
      buttonleft.style.visibility = "hidden";
      buttonright.style.visibility = "hidden";
    }
  }, [
    matches,
    buttonleft,
    buttonright,
    activeSongPopup,
    activeStatsPopup,
    activePlaylist,
    isStateChanged,
  ]);

  useEffect(() => {
    window
      .matchMedia("(min-width: 1948px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const currentSong =
    song && songs.find((s) => s.name.match(song.split(" - ").slice(1, 2)));

  return (
    <>
      <div className={styles.playlistsection} id="section">
        <h3 className={`${styles.beatsaber} ${styles.headerbeatsaber}`}>
          <i className={styles.neonred}>Custom</i>
          <i className={styles.neonblue}>Playlist</i>
        </h3>
        <div className={styles.playlistsect}>
          {(activeSongPopup === true || matches === true) && (
            <SongPopup cover={cover} currentSong={currentSong} />
          )}
          {activePlaylist === true && (
            <div className={styles.playlist} id="playlist">
              {songs.map((s, index) => (
                <Song
                  active={`${s.artist} - ${s.name}` === activeSongOnPage}
                  song={s}
                  index={index}
                  key={index}
                  onClick={(e) => onSongClick(e)}
                />
              ))}
            </div>
          )}
          {(activeStatsPopup === true || matches === true) && <StatsPopup />}
        </div>
        <Button>
        <div className={styles.buttonn}>
        <svg
          height="60px"
          width="270px"
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.shape}
            id="shape"
            d="M 250,0 H 0 V 60 H 250 V 0 Z"
          />
        </svg>
        <div className={styles.hovertext} id="hover">
        <div className={styles.songdiv}>
          <h3 className={`${styles.beatsaber} ${styles.beatsaber}`}>
            <i
              className={styles.neonblue}
              style={{ fontSize: "22px", marginTop: "20px" }}
            >
              DOWNLOAD
            </i>
          </h3>
          </div>
          </div>
          <Ripple color={"white"} duration={2000} />
          </div>
        </Button>
        {/* <div className={styles.buttoncontainer} style={{ height: "60px" }}>
        <svg
          height="60px"
          width="270px"
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.shape}
            id="shape"
            d="M 250,0 H 0 V 60 H 250 V 0 Z"
          />
        </svg>
        <div className={styles.hovertext} id="hover">
          <div className={styles.songdiv}>
            <h3 className={`${styles.beatsaber} ${styles.beatsaber}`}>
              <i
                className={styles.neonblue}
                style={{ fontSize: "22px", marginTop: "17px" }}
              >
                DOWNLOAD
              </i>
            </h3>
          </div>
        </div>
      </div> */}
      </div>
      <div id="buttons" className={styles.buttons}>
        <ArrowButton onClick={(e) => onLeftArrowClick(e)} direction="left" />
        <ArrowButton onClick={(e) => onRightArrowClick(e)} direction="right" />
      </div>
    </>
  );
};
