import './App.css';
import Docs from './components/Docs';
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.       
        </p>
      </header>
      <Docs />
      <LineChart />
    </div>
  );
}

export default App;
