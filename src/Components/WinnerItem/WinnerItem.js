import React from 'react';
import styles from './WinnerItem.module.css'

const winnerItem = (props) => {
  return (
    <div key={props.id} className={styles.winnerItem}>
      <p>{props.winner}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default winnerItem;