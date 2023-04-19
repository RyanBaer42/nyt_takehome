import { useState } from 'react';
import { useEffect } from 'react';
import fetchData from '../../ApiCalls';
import Container from '../Container/Container';

const Dashboard = ({ setSelectedStory }) => {
  const [category, setCategory] = useState('science');
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
      <select value={category} onChange={handleCategoryChange}>
        <option value="science">Science</option>
        <option value="health">Health</option>
        <option value="sports">Sports</option>
        <option value="arts">Arts</option>
      </select>
      <Container stories={stories} setSelectedStory={setSelectedStory} />
    </div>
  );
};

export default Dashboard;