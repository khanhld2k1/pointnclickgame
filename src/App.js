import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [startPoint, setStartPoint] = useState("");
  useEffect(() => {
    if (startPoint === ""){
      setStartPoint(0);
    }
  }, [startPoint]);
  
  const handleInput = (e) => {
    if (startPoint === ""){
      setStartPoint(0);
    }else{
      setStartPoint(e.target.value);
    }
  }
  const handleClick = () => {
    for(let i = 1; i <= startPoint; ++i){
      console.log(i);
    }
  }
  return (
    <div className="App">
      <div className="game_container">
        <div className="game_title">
          <h2 className="title_base">Let's Play</h2>
          <h2 className="title_win">You Win</h2>
          <h2 className="title_lose">You Lose</h2>
        </div>

        <div className="game_controller">
          <div className="game_point">
            <div>Point:</div>
            <input 
              type="number" 
              defaultValue={startPoint} 
              onChange={handleInput} 
            />
          </div>
          <div className="game_timer">Timer</div>
        </div>

        <div className="game_button">
          <button onClick={handleClick}>refresh</button>
          <button onClick={()=>{console.log(startPoint)}}>Check</button>
        </div>
        
        <div className="game_playArea">
          <div className="game_blocks"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
