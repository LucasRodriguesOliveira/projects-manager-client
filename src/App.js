import './App.css';
import { Menu } from './components/Menu';

function App({ children }) {
  return (
    <div className="App">
      <Menu />
      { children }
    </div>
  );
}

export default App;
