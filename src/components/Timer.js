import {useEffect} from 'react';

function Timer({dispatch,secondsRemaining}){

  const min= Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(()=>{
    setInterval(function(){
      dispatch({type:"tick"});
    },1000);
  },[dispatch]);
  return <div className="timer">{min < 10 && "0"}{min}:{seconds < 10 && "0"}{seconds}</div>
}

export default Timer;