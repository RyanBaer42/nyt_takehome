import './App.css';
import { Routes, Route } from 'react-router';
import NavBar from '../NavBar/NavBar';
import Dashboard from '../Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route
        path='/'
        element={
          <Dashboard />
        }
        />
      </Routes>
    </div>
  );
}

export default App;
