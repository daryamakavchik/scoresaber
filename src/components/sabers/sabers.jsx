import React from 'react';
import styles from './sabers.module.css';
import { Link } from 'react-router-dom';

export function Sabers({isLeft, isRight}){
    return <Link to='/'>
     <div className={styles.saberslink}>
        { isLeft && <div className={styles.saber} style={ isLeft === true ? {transform: "scale(1) rotate(-35deg) scale(-1, 1)"} : {transform: "scale(1) rotate(36deg) scale(-1, 1)" }}></div>}
        { isRight && <div className={styles.saber} style={ isRight === true ? {transform: "scale(1) rotate(36deg) scale(-1, 1)"} : {transform: "scale(1) rotate(-35deg) scale(-1, 1)" }}></div> }
    </div>
    </Link>
}