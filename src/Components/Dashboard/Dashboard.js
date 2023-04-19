import { useState } from 'react';
import { useEffect } from 'react';
import fetchData from '../../ApiCalls';
import Container from '../Container/Container';
import './Dashboard.css'

const Dashboard = ({ setSelectedStory }) => {
  const [category, setCategory] = useState('health');
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchData(category)
      .then(data => {
        setStories(data.results);
      });
  }, [category]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <select className='dropdown' value={category} onChange={handleCategoryChange}>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="arts">Arts</option>
        <option value="world">World</option>
      </select>
      <Container stories={stories} setSelectedStory={setSelectedStory} />
    </div>
  );
};

export default Dashboard;