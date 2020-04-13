import React from 'react';
import styles from './GameHeader.module.css'
import Button from "../UI/Button/Button";
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';

const gameHeader = (props) => {
    const submitHandler = event => {
        event.preventDefault()
    };

  let button = props.gameOver ? <Button onClick={props.playAgain} disabled={props.disabled}>Play Again</Button> : <Button onClick={props.play} disabled={props.disabled}>Play</Button>;

  return (
    <div className={styles.gameHeader}>
        <form onSubmit={submitHandler}>
            <Select
                options={props.options}
                onChange={props.onSelectChange}
            >{props.children}</Select>
            <Input
                onChange={props.onInputChange}
                placeholder="Enter your name"
                type="text"
                value={props.name}
            />
            {button}
        </form>

    </div>
  );
};

export default gameHeader;