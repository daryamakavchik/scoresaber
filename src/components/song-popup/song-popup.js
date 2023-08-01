import React from "react";
import { useMediaQuery } from "react-responsive";
import { ProgressBar } from "../progress-bar/progress-bar";
import award from '../../images/award.png';
import styles from "./song-popup.module.css";

export const SongPopup = ({ cover, currentSong }) => {

  const isTablet = useMediaQuery({
    query: 'only screen and (min-width: 580px) and (max-width: 875px)'
  });
  const isMobile = useMediaQuery({
    query: 'only screen and (max-width: 580px)'
  })

  React.useEffect(() => {
    const counters = document.getElementById('popup') && document.getElementById('popup').querySelectorAll(".count");
    const speed = 300;

    counters && counters.forEach((counter) => {
      const animate = () => {
        const value = +counter.getAttribute("data-target");
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 90);
        } else {
          counter.innerText = value;
        }
      };
      animate();
    });
  }, [currentSong]);

  let barData = [
    { name: "accuracy", completed: parseFloat(currentSong.accuracy) },
    {
      name: "predicted accuracy",
      completed: parseFloat(currentSong.predictedaccuracy),
    },
    {
      name: "pp",
      completed: currentSong.pp && currentSong.pp.replace(/,/g, "."),
    },
    { name: "predicted pp", completed: currentSong.predictedpp },
  ];

  return (
    <div className={styles.active} id='songpopup'>
      <div
        className={styles.popupimgactive}
      >
        <img src={cover} style={{ width: isTablet ? "140px" : "180px", height: isTablet ? "140px": "180px" }} />
      </div>
      <div className={styles.popupstats}>
      <div className={styles.menubutton}>
              <img className={styles.icon} src={award} />
                {currentSong && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)", fontSize: '14px'}}
                    data-target={`${Math.round(currentSong.score.replace(/,/g, ".") * 100) / 100}`}
                    className='count'
                  >
                    0
                  </h3>
                )}
        </div>
        <div className={styles.menubutton}>
              <img className={styles.icon} src={award} />
                {currentSong && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)", fontSize: '14px'}}
                    data-target={`${Math.round(currentSong.maxcombo * 100) / 100}`}
                    className='count'
                  >
                    0
                  </h3>
                )}
        </div>
        <div className={styles.menubutton}>
              <img className={styles.icon} src={award} />
                {currentSong && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)", fontSize: '14px'}}
                    data-target={`${currentSong.fullcombo}`}
                    className='count'
                  >
                    0
                  </h3>
                )}
        </div>
        <div className={styles.menubutton}>
              <img className={styles.icon} src={award} />
                {currentSong && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)", fontSize: '14px'}}
                    data-target={`${Math.round(currentSong.badcuts * 100) / 100}`}
                    className='count'
                  >
                    0
                  </h3>
                )}
        </div>
        <div className={styles.stats}>
          {barData.map((el, idx) => (
            <div key={idx} className={styles.stat}>
              <ProgressBar completed={el.completed} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
