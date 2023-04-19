import './Dashboard.css'

import { useState } from 'react'
import { useEffect } from 'react'
import fetchData from '../../ApiCalls'
import Container from '../Container/Container'

const Dashboard = () => {
    const [stories, setStories] = useState([])

    useEffect(() => {
        fetchData()
        .then(data => {
            console.log(data.results)
            setStories(data.results)
        })
    })
    return (
        <div>
            <Container stories={stories}/>
        </div>
    )
}

export default Dashboard