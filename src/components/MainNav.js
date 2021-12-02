
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"

const MainNav = () => {
    //defining navigate hook and a state function 
    let navigate = useNavigate()
    const [inputSearch, setInputSearch] = useState('')

    //on form submit it will navigate to a new page called searchedProducts while passing in inputSearch
    const handleFormSubmit = (event) => {
        event.preventDefault()
        navigate(`/searchedProducts/${inputSearch}`);
    }
    
    //sets input search to what the user types in the input
    const handleChange = (event) => {
        setInputSearch(event.target.value)
    }

    //the search logo dissapears on a mouseOver
    const handleSearchTag = (event) => {
        event.target.style.display = 'none'
    }

    //expandable search tab 
    const handleSearchBar = (event) => {
        event.target.style.width = '200px'
        event.target.style.border = 'black solid 1px'
    }

    return (
        <div>
            <ul>
                <div className="topBar">
                    <nav>
                        <ul className="left">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="catalogue">Catalogue</Link></li>
                        </ul>
                    </nav>
                    {/* handleFormSubmit is called when the user submits their search query */}
                    <form onSubmit={handleFormSubmit} className="right">
                        <label htmlFor="searchTab" className="visuallyHidden">Search all products</label>
                        <div>
                            <BsSearch onClick={handleSearchTag} />
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