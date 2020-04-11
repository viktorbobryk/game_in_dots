import React, {Component} from 'react';
import styles from "./App.module.css"
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
import GameBoard from "./Components/GameBoard/GameBoard";

class App extends Component {
  render() {
    return (
        <div className={styles.app}>
          <GameBoard/>
          <LeaderBoard/>
        </div>
    );
  }
}

export default App;
