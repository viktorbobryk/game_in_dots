import React, {Component} from 'react';
import styles from './GameArea.module.css';
import GameCell from '../GameCell/GameCell'

class GameArea extends Component {
    state = {
        showResult: false
    };


    render() {

        let rows = [];
        let cellId = 0;
        for (let i = 0; i < this.props.tableSize; i++) {
            let cols = [];
            for(let j = 0; j<this.props.tableSize; j++){
                cols.push(<GameCell key={j} id={cellId} nowrap/>);
                cellId++;
            }
            rows.push(<tr key={i}>{cols}</tr>);
        }


        const participants = this.props.userName ? <h2>computer vs {this.props.userName}</h2> : null;
        const showresult = this.state.showResult ? <h1>Message here!!!</h1> : null;

        return (
            <div className={styles.gameArea}>
                {participants}
                {showresult}
                <table className={styles.playground}>
                    <tbody>
                       {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GameArea;