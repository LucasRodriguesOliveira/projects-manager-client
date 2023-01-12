import './App.css';
import { AuthProvider } from './context/Auth';

function App({ children }) {
  return (
    <div className="App">
      <AuthProvider>
        { children }
      </AuthProvider>
    </div>
  );
}

export default App;
