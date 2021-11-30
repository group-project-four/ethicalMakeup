
import firebase from '../firebase'
import { useEffect, useState } from 'react'

const CustomerReview = (props) => {
    const [name, setName] = useState('')
    const [reviews, setReviews] = useState([])
    const [recommendation, setRecommendation] = useState('')
    const [input, setInput] = useState('')
    const [rating, setRating] =  useState(0)
    const [ratingIcon, setRatingIcon] = useState('')

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

    function handleCheckbox(event) {
        let recommend
        if (event.target.value === 'yes') {
            recommend = 'The user does not recommend this product'
        } else {
            recommend = 'The user recommends this product'
        }
        setRecommendation(recommend)

    }

    useEffect(() => {

        console.log(props)
        const dbRef = firebase.database().ref(`${props.product}`)
        console.log(dbRef)
        dbRef.on('value', response => {
            const data = response.val()
            let newArray = []
            for (let key in data) {
                newArray.push(data[key])
            }
            setReviews(newArray)
        })
    }, [])

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
                            <div>
                                <label htmlFor="checkbox">Would Repurchase</label>
                                <input type="checkbox" id="checkboxYes"  value={'yes'} onChange={handleCheckbox} /></div>
                            <div>
                                <label htmlFor="checkbox" >Would Not Repurchase</label>
                                <input type="checkbox" id="checkbox" value={'no'} onChange={handleCheckbox} />
                            </div>
                        </div>
                        <label htmlFor="rating" className="visuallyHidden">Rating 1-5</label>
                        <p className="ratingLabel">Your rating:</p>
                        <div className="sliderContainer">
                            <input type="range" id="rating" className="ratingSlider" name="rating"
                            min="1" max="5" step="1" defaultValue={rating} onChange={handleRatingChange}/>
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