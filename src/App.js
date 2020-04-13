import React, {Component} from 'react';
import styles from "./App.module.css"
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
import GameBoard from "./Components/GameBoard/GameBoard";

class App extends Component {
    state = {
        toUpdate: false
    };

  render() {
      const toUpdateWinnersList = () => {
          this.setState({
              toUpdate: !this.state.toUpdate
          })
      };
    return (
        <div className={styles.app}>
          <GameBoard toUpdate={toUpdateWinnersList}/>
          <LeaderBoard  updateWinners={this.state.toUpdate}/>
        </div>
    );
  }
}

export default App;
