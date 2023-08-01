import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  setCurrentPlayer,
  setOpponentId,
  sendOpponentId,
  setPlayersData,
} from "../services/actions/index";
import { Playlist } from "../playlist/playlist";
import { songs } from "../utils/songs"
import rank from "../../images/rank.png";
import award from "../../images/award.png";
import globe from "../../images/cup.png";
import menu from '../../images/men.svg';
import styles from "./main-page.module.css";

export function MainPage() {
  const dispatch = useDispatch();
  const {
    player,
    players,
    opponentInputValue,
  } = useSelector((store) => store.data);

  let params = useParams();
  let userId = params.userId;

  React.useEffect(() => {
    dispatch(setPlayersData());
  }, []);

  React.useEffect(() => {
    dispatch(setCurrentPlayer(userId));
  }, [userId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(sendOpponentId(opponentInputValue));
    document.getElementById("opponentidform").reset();
  };

  const handleInputChange = (e) => {
    dispatch(setOpponentId(e.target.value));
  };

  React.useEffect(() => {
    const counters = document.querySelectorAll(".count");
    const speed = 200;

    counters.forEach((counter) => {
      const animate = () => {
        const value = +counter.getAttribute("data-target");
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 20);
        } else {
          counter.innerText = value;
        }
      };
      animate();
    });
  }, [players]);

  const countRankOverlayWidth = () => {
    const count = document.querySelector('.count').value;
    const rankOverlay = document.querySelector('.main-page_counteroverlay');
    if(count > 1000) {rankOverlay.style.width = '270px'} else { rankOverlay.style.width = '170px' };
  }

  return (
    player.name && songs && (
      <>
        <div className={styles.maincontainer}>
          <div className={styles.info}>
            <div className={styles.countercontainer}>
              <div className={styles.counter}>
                <div className={styles.counteroverlay} style={{ countRankOverlayWidth }}></div>
                <div className={styles.counterdetails}>
                  <h3>PP</h3>
                </div>
                <img className={styles.icon} src={rank} />
                {player && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)"}}
                    data-target={`${Math.round(player.pp * 100) / 100}`}
                    className='count'
                  >
                    0
                  </h3>
                )}
              </div>

              <div className={styles.counter}>
                <div className={styles.counteroverlay}></div>
                <div className={styles.counterdetails}>
                  <h3>GLOBAL RANK</h3>
                </div>
                <img className={styles.icon} src={award} />
                {player && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)"}}
                    data-target={`${Math.round(player.rank * 100) / 100}`}
                    className='count'
                  >
                    0
                  </h3>
                )}
              </div>

              <div className={styles.counter}>
                <div className={styles.counteroverlay}></div>
                <div className={styles.counterdetails}>
                  <h3>COUNTRY RANK</h3>
                </div>
                <img className={styles.icon} src={globe} />
                {player && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)"}}
                    data-target={`${Math.round(player.countryRank * 100) /
                      100}`}
                      className='count'
                  >
                    0
                  </h3>
                )}
              </div>

              <div className={styles.counter}>
                <div className={styles.counteroverlay}></div>
                <div className={styles.counterdetails}>
                  <h3>RANKED PLAY COUNT</h3>
                </div>
                <img className={styles.icon} src={award} />
                {player && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)"}}
                    data-target={`${Math.round(player.scoreStats.rankedPlayCount * 100) / 100}`}
                    className={styles.count}
                  >
                    0
                  </h3>
                )}
              </div>

              <div className={styles.counter}>
                <div className={styles.counteroverlay}></div>
                <div className={styles.counterdetails}>
                  <h3>TOTAL RANKED SCORE</h3>
                </div>
                <img className={styles.icon} src={award} />
                {player && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)"}}
                    data-target={`${Math.round(player.scoreStats.totalRankedScore * 100) / 100}`}
                    className='count'
                  >
                    0
                  </h3>
                )}
              </div>

              <div className={styles.counter}>
                <div className={styles.counteroverlay}></div>
                <div className={styles.counterdetails}>
                  <h3>AVERAGE RANKED ACCURACY</h3>
                </div>
                <img className={styles.icon} src={award} />
                {player && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)"}}
                    data-target={`${Math.round(player.scoreStats.averageRankedAccuracy * 100) / 100}`}
                    className='count'
                  >
                    0
                  </h3>
                )}
              </div>

              <div className={styles.counter}>
                <div className={styles.counteroverlay}></div>
                <div className={styles.counterdetails}>
                  <h3>TOTAL PLAY COUNT</h3>
                </div>
                <img className={styles.icon} src={award} />
                {player && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)"}}
                    data-target={`${Math.round(player.scoreStats.totalPlayCount * 100) / 100}`}
                    className='count'
                  >
                    0
                  </h3>
                )}
              </div>

              <div className={styles.counter}>
                <div className={styles.counteroverlay}></div>
                <div className={styles.counterdetails}>
                  <h3>TOTAL SCORE</h3>
                </div>
                <img className={styles.icon} src={award} />
                {player && (
                  <h3
                  style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)"}}
                    data-target={`${Math.round(player.scoreStats.totalScore * 100) / 100}`}
                    className='count'
                  >
                    0
                  </h3>
                )}
              </div>

              <div className={styles.counter}>
                <div className={styles.counteroverlay}></div>
                <div className={styles.counterdetails}>
                  <h3>REPLAYS WATCHED BY OTHERS</h3>
                </div>
                <img className={styles.icon} src={award} />
                {player && (
                  <h3
                    style={{ margin: "0", color: "rgba(255, 255, 255, 0.85)"}}
                    data-target={`${Math.round(player.rank * 100) / 100}`}
                    className='count'
                  >
                    0
                  </h3>
                )}
              </div>
       </div>
       <div className={styles.userinfo}>
            <div
              className={styles.avatar}
              style={{ backgroundImage: `url(${player.profilePicture})` }}
            ></div>
            </div>
              <Link className={styles.menubutton}  to='/'>
            <img
            className={styles.menu}
              src={menu}
            />
            </Link> 
          </div>
          <Playlist />
          {/* <div className={styles.page}>
            <div className={styles.content}> */}
              {/* <h2 className={styles.maintitle}>compare</h2>
            <Form
              id="opponentid"
              submitFunc={handleFormSubmit}
              inputChangeFunc={handleInputChange}
              text="enter your opponent scoresaber id"
            />
            {isOpponentIdSubmitted && (
              <p className={styles.cheering}>
                Oops! Data isn't there yet, <br /> but you're obviously much
                better
              </p>
            )} */}
              {/* <Sabers isLeft isRight /> */}
            </div>

            {/* <div className={styles.content}> */}
              {/* <h2 className={styles.maintitle}>get stats</h2> */}
              {/* <Form
              id="opponentid"
              submitFunc={handleFormSubmit}
              inputChangeFunc={handleInputChange}
              text="enter your opponent scoresaber id"
            />
            {isOpponentIdSubmitted && (
              <p className={styles.cheering}>
                Oops! Data isn't there yet, <br /> but you're obviously much
                better
              </p>
            )} */}
              {/* <Sabers isLeft isRight /> */}
            {/* </div>
          </div> */}
        {/* </div> */}
      </>
    )
  );
}
