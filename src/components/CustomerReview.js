
import firebase from '../firebase'
import { useEffect, useState } from 'react'

const CustomerReview = (props) => {
    const [name, setName] = useState('')
    const [reviews, setReviews] = useState([])
    const [recommendation, setRecommendation] = useState('')
    const [input, setInput] = useState('')
    const [rating, setRating] =  useState(0)
    const [checkbox, setCheckbox] = useState(false)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        addToDatabase(props)
        setName('')
        setInput('')
    }

    const handleInputChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handleTextAreaChange = (event) => {
        setInput(event.target.value)
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value)
    }

    function addToDatabase(props) {
        const dbRef = firebase.database().ref(`${props.product}`)
        dbRef.push(
            {
                "name": `${name}`,
                "review": `${input}`,
                "checkbox": `${recommendation}`,
                "rating": `${rating}`
            }
        )
    }

    const handleCheckbox = (event) => {
        if (event.target.checked) {
            // updating checkbox visual
            setCheckbox(!checkbox)
            // setting the right value for database
            setRecommendation("I recommend this product")
        } else {
            // setting the right value for database
            setRecommendation("I do not recommend this product")
        }
    }

    useEffect(() => {
        const dbRef = firebase.database().ref(`${props.product}`)
        dbRef.on('value', response => {
            const data = response.val()
            let newArray = []
            for (let key in data) {
                newArray.push(data[key])
            }
            setReviews(newArray)
        })
    }, [])
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return (
        <div>
            <div className="formContainer">
                <h3>Write a Review!</h3>
                <div className="form">
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="name" className="visuallyHidden">Your Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="name"
                            value={name}
                            size={15}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            required
                        />
                        <label htmlFor="review" className="visuallyHidden">Your Review:</label>
                        <textarea
                            value={input}
                            onChange={handleTextAreaChange}
                            id="review"
                            className="review"
                            placeholder="Write your review here!"
                            required
                        />
                        <div className="checkBoxes">
                            <label htmlFor="checkbox">Would you repurchase the product?</label>
                            <input type="checkbox" id="checkbox" value={checkbox} onChange={handleCheckbox} />                        
                        </div>
                        <label htmlFor="rating" className="visuallyHidden">Rating 1-5</label>
                        <p className="ratingLabel">Your rating:</p>
                        <div className="sliderContainer">
                            <input type="range" id="rating" className="ratingSlider" name="rating"
                            min="0" max="5" step="1" defaultValue={rating} onChange={handleRatingChange}/>
                            <output className="output">{rating}</output>
                        </div>
                        <input type="submit" value="Post" className="submitButton" />
                    </form>
                </div>
            </div>

            {
                reviews.length > 0 ?
                    <ul className="reviewsSection">
                        <h2>Product Reviews:</h2>
                        {
                            reviews.map((review, index) => {
                                return (
                                    <li key={index} className="singleReview">
                                        <h3>{review.name}</h3>
                                        <p>{review.rating} / 5</p>
                                        <p>{review.review}</p>
                                        <p>{review.checkbox}</p>
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