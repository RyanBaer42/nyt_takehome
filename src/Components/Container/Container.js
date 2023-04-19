import Card from '../Card/Card'
import './Container.css'

const Container = ({stories}) => {
    const storyCards = stories.map(story => {
        let imageUrl = '';
        if (Array.isArray(story.multimedia)) {
            imageUrl = story.multimedia[1].url;
        }
        return (
            <Card 
                image={imageUrl}
                title={story.title}
            />
        )
    })
    return (
        <div>{storyCards}</div>
    )
}

export default Container