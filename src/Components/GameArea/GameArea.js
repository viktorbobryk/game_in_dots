import React from 'react';
import styles from './GameArea.module.css';
import GameCell from '../GameCell/GameCell'

const GameArea = (props) => {

        let table = props.table.map((cell, index) => {
            return (
                <GameCell key={index} color={cell.className} id={cell.id}/>
            )
        });
        let rows = [];
        let cellId = 0;

        for (let i = cellId; i < props.tableRow; i++) {
            let cols = [];
            for(let j = 0; j < props.tableRow; j++){
                cols.push(table[cellId]);
                cellId++;
            }
            rows.push(<div key={i}>{cols}</div>);
        }

    const message = props.computerScore > props.userScore ? 'computer won!!!' : 'user won!!!';
    const participants = props.userName ? <h2><span>{props.computerScore}</span>computer <span>vs</span> {props.userName}<span>{props.userScore}</span></h2> : null;
    const showResult = props.showResult ? <h1>{message}</h1> : null;

    return (
        <div className={styles.gameArea} onClick={props.onclick}>
            {participants}
            {showResult}
            <div className={styles.playground}>
               {rows}
            </div>
        </div>
    );
};

export default GameArea;