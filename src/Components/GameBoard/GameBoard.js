import React, {PureComponent} from 'react';
import styles from './GameBoard.module.css'
import GameHeader from "../GameHeader/GameHeader";
import GameArea from "../GameArea/GameArea"
import Loader from '../UI/Loader/Loader'
import axios from '../../axios/axios-task'

class GameBoard extends PureComponent {
    state = {
        computerScore: 0,
        userScore: 0,
        loading: true,
        showResult: false,
        activeMode: {
            field: null,
            delay: null,
        },
        userName: "",
        settings: {},
        activeCell: null,
        tableCells: [],
        untouchedCells: [],
        tableSize: null,
        interval: null,
        disabled: false
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

       const onclickHandler = (e) => {
           e.stopPropagation();
           console.log(e.target);
               const table = [...this.state.tableCells];
               let userScore = this.state.userScore;
               let computerScore = this.state.computerScore;


               if (+e.target.id === this.state.tableCells[this.state.activeCell].id){
                   table[this.state.activeCell].className = 'green';
                   userScore ++;
                   console.log(+e.target.id);
                   console.log(this.state.tableCells[this.state.activeCell].id);
               }
               else{
                   console.log('else');
                   table[this.state.activeCell].className = 'red';
                   computerScore ++;
               }
               this.setState({
                   table: table,
                   userScore: userScore,
                   computerScore: computerScore
               })

           };

        const selectHandler = (e) => {
            const currentState = {...this.state};
            const activeModeName = currentState.settings[e.target.value];
            const activeMode = {
                field: activeModeName.field,
                delay: activeModeName.delay
            };
            const tableSize = activeModeName.field ** 2;
            const tableCells = [];
            const untouchedCells = [];

            for (let i = 0; i < tableSize; i++){
                tableCells.push({className: 'basic', id: i});
                untouchedCells.push(i)
            }

            this.setState({
                activeMode: activeMode,
                tableSize: tableSize,
                tableCells: tableCells,
                untouchedCells: untouchedCells
            });

         };

        const inputHandler = (e) => {
            this.setState({
                userName: e.target.value
            })
        };

        const startGame = () => {
          let interval = setInterval(generateActiveCell, this.state.activeMode.delay);
          this.setState({
              interval: interval,
          })
        };

        const generateActiveCell = () => {
           let computerScore = this.state.computerScore;
           let table = [...this.state.tableCells];
           table.forEach((cell)=>{
                if (cell.className === 'blue'){
                    cell.className = 'red';
                    computerScore ++;
                }
            });

            let activeCell = null;
            let untouchedCells = [...this.state.untouchedCells];
            let rand = Math.floor(Math.random() * untouchedCells.length);
            activeCell = untouchedCells.splice(rand, 1);

            table[activeCell].className = 'blue';

            if (!untouchedCells.length || (this.state.computerScore > Math.round(this.state.tableSize / 2)) || this.state.userScore > Math.round(this.state.tableSize / 2)){
                this.setState({
                    interval: clearInterval(this.state.interval),
                    showResult: true,
                    disabled: true
                });
            }
            this.setState({
                untouchedCells: untouchedCells,
                tableCells: table,
                activeCell: activeCell[0],
                computerScore: computerScore
            });


        };

        const renderGameArea = () => {
            return(
                <GameArea
                    userScore={this.state.userScore}
                    computerScore={this.state.computerScore}
                    showResult={this.state.showResult}
                    tableRow={this.state.activeMode.field}
                    userName={this.state.userName}
                    activeCell={this.state.activeCell}
                    table={this.state.tableCells}
                    onclick={onclickHandler}
                />
            )
        };

        let optionsList = Object.keys(this.state.settings);
        return (
            <div className={styles.gameBoard}>
                <GameHeader
                    play={startGame}
                    onSelectChange={selectHandler}
                    onInputChange={inputHandler}
                    options={optionsList}
                    disabled={!(Boolean(this.state.userName && this.state.activeMode.field)) || this.state.disabled}
                />
                {
                    this.state.loading ? <Loader /> : renderGameArea()
                }

            </div>
        );
    }
}

export default GameBoard;