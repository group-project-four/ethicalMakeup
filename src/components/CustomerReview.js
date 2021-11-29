
import firebase from '../firebase'
import { useEffect, useState } from 'react'

const CustomerReview = (props) => {
    const [name, setName] = useState('')
    const [reviews, setReviews] = useState([])
    const [input, setInput] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        addToDatabase(props)
    }

    const handleInputChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handleTextAreaChange = (event) => {
        event.preventDefault()
        setInput(event.target.value)
    }

    function addToDatabase(props) {
        const dbRef = firebase.database().ref(`${props.product}`)
        dbRef.push(
            { 
                "name": `${name}`,
                "review": `${input}`
            }
        )
    }

    useEffect(() => {
        
        console.log(props)
        const dbRef = firebase.database().ref(`${props.product}`)
        console.log(dbRef)
        dbRef.on('value',response => {
            const data = response.val()
            let newArray = []
            for (let key in data) {
                console.log(data[key])
                newArray.push(data[key])
            }
            setReviews(newArray)
        })
    },[])

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="review">Feel free to share your thoughts...
                    <input
                        type="text"
                        id="name"
                        value={name}
                        size={15}
                        onChange={handleInputChange}
                    />
                    <textarea
                        value={input}
                        onChange={handleTextAreaChange} 
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>

            {
                reviews.length > 0 ? 
                <ul>
                    {
                        reviews.map((review,index) => {
                            console.log(review.review)
                            return(
                                <li key={index}>
                                    <h3>{review.name}</h3>
                                    <p>{review.review}</p>
                                </li>
                            )
                        })
                    }
                </ul> :
                null
            }
            
        </div>
    )
}

export default CustomerReview