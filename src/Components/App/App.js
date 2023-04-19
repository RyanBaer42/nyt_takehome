import './App.css';
import { Routes, Route } from 'react-router';
import NavBar from '../NavBar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import Details from '../Details/Details';
import { useState } from 'react';

function App() {
  const [selectedStory, setSelectedStory] = useState({})

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route
        path='/'
        element={
          <Dashboard 
          setSelectedStory={setSelectedStory}
          />
        }
        />
        <Route 
        path='/story/:title'
        element={
          <Details
          selectedStory={selectedStory}
          />
        }
        />
      </Routes>
    </div>
  );
}

export default App;
