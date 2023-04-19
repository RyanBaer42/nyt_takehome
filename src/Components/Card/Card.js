import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({image, story, setSelectedStory}) => {
    return (
        <div className='card'>
            <Link className='detail-link' onClick={() => setSelectedStory(story)} to={`story/${story.title}`}>
                <img className='card-image' src={image} />
                <p className='card-title'>{story.title}</p>
            </Link>
        </div>
    )

}

export default Card