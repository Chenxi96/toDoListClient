import './App.css';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <nav>
            <Link className='nav-bar' to={'/'}>To Do List</Link>
            <div className='options'>
            <Link className='nav-bar' to={'/home'}>Home</Link>
            <Link className='nav-bar' to={'/work'}>Work</Link>
            <Link className='nav-bar' to={'/vacation'}>Vacation</Link>
            </div>
        </nav>
    )
}