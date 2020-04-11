import React, {Component} from 'react';
import styles from './GameBoard.module.css'
import GameHeader from "../GameHeader/GameHeader";
import GameArea from "../GameArea/GameArea"
import Loader from '../UI/Loader/Loader'
import axios from '../../axios/axios-task'

class GameBoard extends Component {
    state = {
        loading: true,
        field: null,
        delay: null,
        userName: "",
        settings: {},
        activeCell: null
    };

    async componentDidMount() {
        try {
            const response = await axios.get('/game-settings');

            this.setState({
                settings: response.data,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }

    }

    render() {
        const selectHandler = (e) => {
            const currentState = {...this.state};
            const activeMode = currentState.settings[e.target.value];
            this.setState({
                field: activeMode.field,
                delay: activeMode.delay
            })
        };

        const inputHandler = (e) => {
            this.setState({
                userName: e.target.value
            })
        };

        const generateActiveCell = () => {
            let res = Math.floor(Math.random() * Math.floor(Math.pow(this.state.field, 2)));

            this.setState({
                activeCell: res
            });
        };

        const renderGameArea = () => {
            return(
                <GameArea
                    tableSize={this.state.field}
                    userName={this.state.userName}
                    activeCell={this.state.activeCell}
                />
            )
        };

        let optionsList = Object.keys(this.state.settings);
        return (
            <div className={styles.gameBoard}>
                <GameHeader
                    play={generateActiveCell}
                    onSelectChange={selectHandler}
                    onInputChange={inputHandler}
                    options={optionsList}
                    disabled={(Boolean(this.state.userName && this.state.field))}
                />
                {
                    this.state.loading ? <Loader /> : renderGameArea()
                }

            </div>
        );
    }
}

export default GameBoard;