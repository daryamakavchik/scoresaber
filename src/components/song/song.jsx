import { style } from "@mui/system";
import React, { forwardRef } from "react";
import styles from "./song.module.css";

export const Song = ({active, song, index, onClick}) => {
  return (
    <div
      id='container'
      className={styles.songcontainer}
      index={index}
      style={{ height: "60px" }}
      onClick={onClick}
    >
      <svg
      id='svg'
        height="60px"
        width="900px"
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={active === false ? styles.shape : styles.activeshape} id='shape' d="M 720,0 H 0 V 60 H 720 V 0 Z" />
      </svg>
      <div className={styles.hovertext} index={index} id='hover'>
        <div className={styles.songdiv}>
          {song.artist} - {song.name}
        </div>
      </div>
    </div>
  );
};
