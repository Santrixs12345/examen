import logo from './logo.svg';
import './App.css';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          El bot escojio
        </p>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          A, creo k es un ppt
        </p>
        <div>
          <Game/>
        </div>
      </header>
    </div>
  );
}

export default App;
