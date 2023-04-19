import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <Link className='home-link' to={'/'}>
                <h1 className='nav-title'>NYT Takehome</h1>
            </Link>
        </div>
    )
}

export default NavBar