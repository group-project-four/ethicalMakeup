
import { Link } from 'react-router-dom'
import { useState } from 'react'

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
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#aboutUs">About us</a></li>
                    <li><Link to="catalogue">Catalogue</Link></li>
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
        </div>
    )
}

export default NavbarTop