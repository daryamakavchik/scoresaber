import React from "react";
import styled, { keyframes } from "styled-components";
import styles from "./progress-bar.module.css";

export const ProgressBar = ({ completed }) => {
  const load = keyframes`
        0% { width: 0; }
        100% { width: ${completed}% }
    `;

  const Bar = styled.div`
    height: 100%;
    background-color: rgba(104, 117, 144, 0.3);
    border-radius: inherit;
    text-align: left;
    animation: ${load} 2s normal forwards;
  `;

  return (
    <div className={styles.container}>
      <Bar>
        <span className={styles.label}>{`${completed}%`}</span>
      </Bar>
    </div>
  );
};
