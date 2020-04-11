import React from 'react';
import styles from './GameHeader.module.css'
import Button from "../UI/Button/Button";
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';

const gameHeader = (props) => {
    const submitHandler = event => {
        event.preventDefault()
    };

  return (
    <div className={styles.gameHeader}>
        <form onSubmit={submitHandler}>
            <Select
                options={props.options}
                onChange={props.onSelectChange}
            >Pick game mode</Select>
            <Input
                onChange={props.onInputChange}
                placeholder="Enter your name"
                type="text"
            />
            <Button
                type="play"
                onClick={props.play}
                disabled={!props.disabled}
            >Play</Button>
        </form>

    </div>
  );
};

export default gameHeader;