import React, { useState } from "react";
import { usersEasy } from "../utils/users-easy";
import { usersNormal } from "../utils/users-normal";
import { usersHard } from "../utils/users-hard";
import { usersExpert } from "../utils/users-expert";
import { User } from "../user/user";
import { tabs } from '../../components/utils/tabs';
import styles from "./stats-popup.module.css";

export const StatsPopup = () => {
  const [activeTabOnPage, setActiveTabOnPage] = useState(`${tabs[0]}`);
  const onTabClick = (e) => {
    const newActiveTab = e.target.textContent;
    setActiveTabOnPage(newActiveTab);
  }

  let users;
  if (activeTabOnPage === 'EASY'){
    users = usersEasy
  } else if (activeTabOnPage === 'NORMAL'){
    users = usersNormal
  } else if (activeTabOnPage === 'HARD'){
    users = usersHard
  } else if (activeTabOnPage === 'EXPERT'){
    users = usersExpert
  }

  return (
    <div
      className={styles.popuprightactive} id='statspopup'
    >
      <div className={styles.popupheader}>
        {tabs.map((tab) =>
          <div onClick={(e) => onTabClick(e)} className={activeTabOnPage === tab ? styles.activeheaderstat : styles.headerstat}>{tab}</div>
        )}
      </div>
      <div className={styles.popupsubheader}>
        <div className={styles.popupsubheadertext}>Time Set</div>
        <div className={styles.popupsubheadertext}>Score</div>
        <div className={styles.popupsubheadertext}>Mods</div>
        <div className={styles.popupsubheadertext}>Accuracy</div>
        <div className={styles.popupsubheadertext}>PP</div>
      </div>
      <div className={styles.players}>
        {users.map((user, index) => (
          <User
            key={index}
            place={user.place}
            avatar={user.avatar}
            country={user.country}
            name={user.name}
            timeset={user.timeset}
            score={user.score}
            mods={user.mods}
            accuracy={user.accuracy}
            pp={user.pp}
          />
        ))}
      </div>
    </div>
  );
};
