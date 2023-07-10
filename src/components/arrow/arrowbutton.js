import React from 'react';
import arrow from '../../images/cube.png';
import styles from './arrowbutton.module.css';

export const ArrowButton = ({direction, onClick }) => {
  return <div id={`button${direction}`} onClick={onClick} className={direction === 'left' ? styles.containerleft : styles.containerright}>
    <img className={styles.img} src={arrow} />
  </div>
}