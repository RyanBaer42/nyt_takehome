import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({image, story, setSelectedStory}) => {
    return (
        <div className='card'>
            <Link onClick={() => setSelectedStory(story)} to={`story/${story.title}`}>
                <img src={image} />
                <p>{story.title}</p>
            </Link>
        </div>
    )

}

export default Card