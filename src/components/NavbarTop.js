import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

import Catalogue from './Catalogue'
import MainPage from './MainPage'

const NavbarTop = (props) => {

    const [inputSearch, setInputSearch] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('hello')
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
            </Routes>
        </div>
    )
}
export default NavbarTop