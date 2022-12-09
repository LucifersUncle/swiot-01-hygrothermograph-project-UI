import './App.css';
import Docs from './components/Docs';
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          The Hygrothermograph       
        </h1>
      </header>
      <Docs />
      <LineChart />
    </div>
  );
}

export default App;
