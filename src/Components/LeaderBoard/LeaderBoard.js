import React, {Component} from 'react';
import styles from './LeaderBoard.module.css'
import Winners from '../Winners/Wnners'
import Loading from '../UI/Loader/Loader'
import Button from '../UI/Button/Button'
import axios from '../../axios/axios-task'

class LeaderBoard extends Component {
    state = {
        winnersList: "",
        loading: true,
        itemsToShow: 4,
        expanded: false
    };
    async componentDidMount() {
        try {
            const response = await axios.get('/winners');

            this.setState({
                winnersList: response.data,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }

    }

    render() {

        const clickHandler = () => {
            this.setState({
                expanded: !this.state.expanded
            })
        };

        const buttonTitle = this.state.expanded ? "show less" : "show more";
        const showWinners =  this.state.expanded ? this.state.winnersList : this.state.winnersList.slice(0, this.state.itemsToShow);
        const winners = this.state.loading ?  <Loading/> : <Winners winners={showWinners}/>;

        return (
            <div className={styles.LeaderBoard}>
                <header>
                    <h1>LeaderBoard</h1>
                    <Button onClick={clickHandler}>{buttonTitle}</Button>
                </header>

                {winners}
            </div>
        );
    }
}

export default LeaderBoard;