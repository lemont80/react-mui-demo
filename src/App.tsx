import './App.css';
// import { MuiTypography } from './components/MuiTypography';
// import DynamicTabs from './components/DynamicTabs';
import DynamicTabsSimulator from './components/DynamicTabSimulator';
import LiveDemo from './components/LiveDemo';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Your App</h1>
        <DynamicTabsSimulator />
        {/* <LiveDemo /> */}
      </div>
    </div>
  );
}

export default App;
