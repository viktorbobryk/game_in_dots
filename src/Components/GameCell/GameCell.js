import React from 'react';
import cx from 'classnames'
import styles from './GameCell.module.css'

const gameCell = ({color, id}) => {
  return (
    <div className={cx(styles.gameCell, styles[color])} id={id}>
    </div>
  );
};

export default gameCell;