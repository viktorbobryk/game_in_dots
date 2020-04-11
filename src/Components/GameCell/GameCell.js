import React from 'react';
import styles from './GameCell.module.css'

const gameCell = (props) => {
  return (
    <td className={styles.gameCell} id={props.id}>
    </td>
  );
};

export default gameCell;