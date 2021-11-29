// import firebase from './firebase'
import firebase from '../firebase'
import { useState } from 'react'

const CustomerReview = () => {
    const [inputSearch, setInputSearch] = useState('')
    const [inputReviews, setInputReview] = useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const dbRef = firebase.database().ref()
        dbRef.push(inputSearch)
        console.log("hello");
        // setInputSearch = ("");
        dbRef.on('value', (response) => {
            const newState = []
            const data = response.val()
    
            for (let object in data) {
                newState.push(data[object])
            }
            setInputReview(newState)
    
        })
    }
    const handleChange = (event) => {
        // event.preventDefault()
        setInputSearch(event.target.value);
    }
    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                    <label htmlFor="review">Feel free to share your thoughts...</label>
                    <input
                        type="text"
                        id="review"
                        value={inputSearch}
                        onChange={handleChange}
                    />
            </form>
            <ul>
                {
                    inputReviews.map((inputReview) => {
                        return(
                            <li>
                               {inputReview}
                            </li>
                        )
                    })
                }
            </ul>
            
        </div>
    )
}

export default CustomerReview