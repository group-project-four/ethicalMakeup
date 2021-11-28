import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

import Catalogue from './Catalogue'
import MainPage from './MainPage'
import App from '../App'

const NavbarTop = (props) => {

    const [inputSearch, setInputSearch] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        props.handleQuery(inputSearch)
    }

    const handleChange = (event) => {
        setInputSearch(event.target.value)
    }


    return (
        <div>
            <nav>
                <ul>
                    <li>
                        {/* <Link to="/">Home</Link> */}
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <Link to="catalogue">Catalogue</Link>
                    </li>
                </ul>
            </nav>

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="searchTab"></label>
                <input
                    type="text"
                    id="searchTab"
                    value={inputSearch}
                    onChange={handleChange}
                />
            </form>

            <Routes>
                <Route path="catalogue" element={<Catalogue />} />
                {/* <Route path="/" element={<MainPage />} /> */}
            </Routes>
        </div>
    )
}
export default NavbarTop