import React from 'react';
import Winner from '../WinnerItem/WinnerItem'

const winners = (props) => {
   const winners =  props.winners.map((winner, index) => {
        return(
            <Winner
            key={winner.id}
            winner={winner.winner}
            date={winner.date}
            />
        )
    });
  return (
    <div>
        {winners}
    </div>
  );
};

export default winners;