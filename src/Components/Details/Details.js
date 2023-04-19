import "./Details.css"
import { Link } from "react-router-dom";

const Details = ({selectedStory}) => {

    const formattedDate = (createdDate) => {
        return createdDate.slice(0, createdDate.indexOf('T'));
    }

    return (
        <div className="Details">
            <img className="details-image" src={selectedStory.multimedia[1].url}/>
            <p>{formattedDate(selectedStory.created_date)}</p>
            <h1>{selectedStory.title}</h1>
            <p>{selectedStory.abstract}</p>
            <Link to={selectedStory.url}>
                <p>Link to Full Story</p>
            </Link>
        </div>
    )
}

export default Details