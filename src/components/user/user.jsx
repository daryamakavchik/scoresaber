import React from "react";
import styles from "./user.module.css";

export const User = ({
  place,
  avatar,
  country,
  name,
  timeset,
  score,
  mods,
  accuracy,
  pp,
}) => {
  return (
    <div className={styles.player} id="playerid">
      <p className={styles.userplace}>{place}</p>
      <img
        className={styles.useravatar}
        style={{ backgroundImage: "url(" + avatar + ")" }}
      />
      <div className={styles.user}>
        <img
          className={styles.usercountry}
          style={{ backgroundImage: "url(" + country + ")" }}
        />
        <p className={styles.username}>{name}</p>
      </div>
      <p className={styles.statext}>{timeset}</p>
      <p className={styles.statext}>{score}</p>
      <p className={styles.statext}>{mods}</p>
      <p className={styles.statext}>{accuracy}</p>
      <p className={styles.statext}>{pp}</p>
    </div>
  );
};
