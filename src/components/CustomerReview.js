
import firebase from '../firebase'
import { useEffect, useState } from 'react'

const CustomerReview = (props) => {
    // state variables
    const [name, setName] = useState('')
    const [reviews, setReviews] = useState([])
    const [recommendation, setRecommendation] = useState('')
    const [input, setInput] = useState('')
    const [rating, setRating] =  useState(0)
    const [checkbox, setCheckbox] = useState(false)

    /**
     * function for handling the form submit
     * @param {*} event 
     */
    const handleFormSubmit = (event) => {
        event.preventDefault()
        addToDatabase(props)
        setName('')
        setInput('')
    }

    /**
     * function for handling change in input type text
     * @param {*} event 
     */
    const handleInputChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    /**
     * function for handling change in textarea
     * @param {*} event 
     */
    const handleTextAreaChange = (event) => {
        setInput(event.target.value)
    }

    /**
     * function for handling change in the rating slider
     * @param {*} event 
     */
    const handleRatingChange = (event) => {
        setRating(event.target.value)
    }

    /**
     * function for pushing data to database
     * data pushed is product -> object
     * @param {*} props 
     */
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

    /**
     * function for handling the checkbox
     * @param {*} event 
     */
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

    /**
     * rendering previously existing reviews when page loads
     * make reference to database product -> object {key:value ...}
     */
    useEffect(() => {
        const dbRef = firebase.database().ref(`${props.product}`)
        dbRef.on('value', response => {
            const data = response.val()
            // partial state for reviews
            let newArray = []
            // loop through the array obtained from data and push to partial state array
            for (let key in data) {
                newArray.push(data[key])
            }
            // set the partial state to the state
            setReviews(newArray)
            // set default recommendation
            setRecommendation("I do not recommend this product")
        })
    }, [props.product])
    
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
                            <input type="checkbox" id="checkbox" className="checkboxBox" tabIndex="0" aria-checked="false" value={checkbox} onChange={handleCheckbox} />                        
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
                                        <h3>{review.name} says:</h3>
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