import './App.css';

function App() {
  return (
    <div className="App">
      <div className="game_container">
        <div className="game_title">
          <h2 className="title_base">Let's Play</h2>
          <h2 className="title_win">You Win</h2>
          <h2 className="title_lose">You Lose</h2>
        </div>

        <div className="game_controller">
          <div className="game_point">Point</div>
          <div className="game_timer">Timer</div>
        </div>

        <div className="game_button">
          <button>refresh</button>
        </div>
        

        <div className="game_playArea">
          <div className="game_blocks">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
