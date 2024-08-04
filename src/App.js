import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [startPoint, setStartPoint] = useState("");
  useEffect(() => {
    if (startPoint === ""){
      setStartPoint("0");
    }
  }, [startPoint]);
  
  const handleInput = (e) => {
    if (startPoint === ""){
      setStartPoint(0);
    }else{
      setStartPoint(e.target.value);
    }
  }

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
        interval = setInterval(() => {
            setTime(prevTime => prevTime + 10);
        }, 10);
    } else {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
}, [isRunning]);

const [points, setPoints] = useState([]);
const [currentPoint, setCurrentPoint] = useState(1);

  const handleStart = () =>{
    setIsRunning(true);
    setCurrentPoint(1);
    const generatedPoints = [];
    for(let i = 1; i <= startPoint; ++i){
      const x = Math.random() * 85;
      const y = Math.random() * 85;
      generatedPoints.push({ id: i, x, y });
    }
    setPoints(generatedPoints);
    document.querySelector('.startButton').style.display = 'none';
    document.querySelector('.resetButton').style.display = 'block';
  }

  const handleClick = () => {
    setTime(0)
    setIsRunning(true);
    setCurrentPoint(1);
    const generatedPoints = [];
    for(let i = 1; i <= startPoint; ++i){
      const x = Math.random() * 85;
      const y = Math.random() * 85;
      generatedPoints.push({ id: i, x, y });
    }
    setPoints(generatedPoints);
    document.querySelector('.title_win').style.display = 'none';
    document.querySelector('.title_base').style.display = 'block';
    document.querySelector('.title_lose').style.display = 'none';
  }

  const handlePointClick = (id) => {
    const element = document.getElementById(`box-${id}`);
    if (id === currentPoint) {
      element.classList.toggle('red');
      setTimeout(() => {
        setPoints(prevPoints => prevPoints.filter(point => point.id !== id));
      }, 1000);
      if (currentPoint === parseInt(startPoint)) {
        setIsRunning(false);
        document.querySelector('.title_win').style.display = 'block';
        document.querySelector('.title_base').style.display = 'none';
        document.querySelector('.title_lose').style.display = 'none';
      }else{
        setCurrentPoint(currentPoint + 1);
      }
    }else{
      setIsRunning(false);
      document.querySelector('.title_lose').style.display = 'block';
      document.querySelector('.title_base').style.display = 'none';
      document.querySelector('.title_win').style.display = 'none';
    }
    console.log(currentPoint)
  };

  return (
    <div className="App">
      <div className="game_container">
        <div className="game_title">
          <h2 className="title_base">Let's Play</h2>
          <h2 className="title_win">All Cleared</h2>
          <h2 className="title_lose">Game Over</h2>
        </div>

        <div className="game_controller">
          <div className="game_point">
            <div onClick={()=>{console.log('Been Clicked Point')}}>Point:</div>
            <input 
              type="number" 
              defaultValue={startPoint} 
              onChange={handleInput} 
            />
          </div>
          <div className="game_timer">
            <div>Timer:</div>
            <div>
              <span>
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                {("0" + ((time / 10) % 100)).slice(-2)}
              </span>
            </div>
          </div>
        </div>

        <div className="game_button">
          <button onClick={handleStart} className="startButton">Play</button>
          <button onClick={handleClick} className="resetButton">Refresh</button>
        </div>
        
        <div className="game_playArea">
          {points.map(point => (
            <div
              key={point.id}
              id={`box-${point.id}`}
              className="game_box"
              style={{ 
                top: `${point.y}%`, 
                left: `${point.x}%`,
                zIndex: (parseInt(startPoint)+1)- Math.abs(point.id)
              }}
              onClick={() => handlePointClick(point.id)}
            >
              {point.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
