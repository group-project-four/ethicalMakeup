
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"

const MainNav = () => {
    let navigate = useNavigate()
    const [inputSearch, setInputSearch] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        navigate(`/searchedProducts/${inputSearch}`);
    }

    const handleChange = (event) => {
        setInputSearch(event.target.value)
    }

    const handleSearchTag = (event) => {
        event.target.style.display = 'none'
    }

    const handleSearchBar = (event) => {
        event.target.style.width = '200px'
        event.target.style.border = 'black solid 2px'
    }

    return (
        <div>
            <ul>
                <div className="topBar">
                    <nav>
                        <ul className="left">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About us</Link></li>
                            <li><Link to="catalogue">Catalogue</Link></li>
                        </ul>
                    </nav>
                    <form onSubmit={handleFormSubmit} className="right">
                        <label htmlFor="searchTab"></label>
                        <div>
                            <BsSearch onMouseOver={handleSearchTag} />
                                <input
                                    type="text"
                                    id="searchTab"
                                    value={inputSearch}
                                    onChange={handleChange}
                                    onMouseOver={handleSearchBar}
                                />
                        </div>
                    </form>
                </div>
            </ul>
        </div>
    )
}
export default MainNav