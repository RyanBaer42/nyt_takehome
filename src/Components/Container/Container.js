import Card from '../Card/Card'
import './Container.css'

const Container = ({stories, setSelectedStory}) => {
    let key = 0;

    const storyCards = stories.map(story => {
        let imageUrl = '';
        if (Array.isArray(story.multimedia)) {
            imageUrl = story.multimedia[1].url;
        }
        key++
        return (
            <Card
                image={imageUrl}
                story={story}
                key={key}
                setSelectedStory={setSelectedStory}
            />
        )
    })
    return (
        <div>{storyCards}</div>
    )
}

export default Container
