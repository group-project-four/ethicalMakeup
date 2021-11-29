// import firebase from './firebase'
import firebase from '../firebase'
import { useEffect, useState } from 'react'

const CustomerReview = (props) => {
    const [input, setInput] = useState('')
    const [reviews, setReviews] = useState([])
    const temp = []
    
    console.log(props.product.name)
    const handleFormSubmit = (event) => {
        event.preventDefault()
        addToDatabase(props)
        readFromDatabase(props)
    }

    const handleChange = (event) => {
        // event.preventDefault()
        setInput(event.target.value)
    }

    function addToDatabase(props) {
        const dbRef = firebase.database().ref(`${props.product.id}`)
        dbRef.push(
            {
                "review": `${input}`
            }
        )
    }
    function readFromDatabase(props) {
        const dbRef = firebase.database().ref(`${props.product.id}`)
        dbRef.on('value',response => {
            console.log(response.val())
            setReviews(response.val())
        })
    }
    useEffect(() => {
        setReviews(response.val())
    },[])
    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                    <label htmlFor="review">Feel free to share your thoughts...</label>
                    <input
                        type="text"
                        id="review"
                        value={input}
                        onChange={handleChange}
                    />
            </form>
            <ul>
                {/* {
                    reviews.map((review) => {
                        return(
                            <li>
                               {review}
                            </li>
                        )
                    })
                } */}
            </ul>
        </div>
    )
}

export default CustomerReview