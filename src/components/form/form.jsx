import React from "react";
import styles from "./form.module.css";

export function Form({ id, submitFunc, inputChangeFunc, text }) {
  return (
    <>
      <form className={styles.form} id={`${id}form`} onSubmit={submitFunc}>
        <label htmlFor={id} className={styles.label}>
          {text}
        </label>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="text"
            id={id}
            name={id}
            placeholder="Example: 76561198001658298"
            className={styles.input}
            onChange={inputChangeFunc}
            maxLength="17"
            required
          ></input>
          <div className={styles.questionmark}>
            <div className={styles.popover}>Some text about scoresaber id</div>
          </div>
        </div>
        <div className={styles['button-container']}>
          <button
            type="submit"
            id="submitbutton"
            onClick={submitFunc}
            className={styles['button-slice']}
            style={{ backgroundColor: "transparent" }}
            disabled
          >
            <div className={styles.top}>
              <span>SUBMIT</span>
            </div>
            <div className={styles.bottom}>
              <span>SUBMIT</span>
            </div>
          </button>
        </div>
      </form>
    </>
  );
}
