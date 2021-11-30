
import firebase from '../firebase'
import { useEffect, useState } from 'react'

const CustomerReview = (props) => {
    const [name, setName] = useState('')
    const [reviews, setReviews] = useState([])
    const [recommendation, setRecommendation] = useState('')
    const [input, setInput] = useState('')
    const [radioOne, setRadioOne] = useState(false)
    const [radioTwo, setRadioTwo] = useState(false)

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

    function addToDatabase(props) {
        const dbRef = firebase.database().ref(`${props.product}`)
        dbRef.push(
            {
                "name": `${name}`,
                "review": `${input}`,
                "radio": `${recommendation}`
            }
        )
    }

    function handleRadio(event) {
        let recommend
        if (event.target.value === 'yes') {
            recommend = 'The user recommends this product'

        } else {
            recommend = 'The user does not recommend this product'
        }
        setRecommendation(recommend)
    }

    useEffect(() => {

        // console.log(props)
        const dbRef = firebase.database().ref(`${props.product}`)
        console.log(dbRef)
        dbRef.on('value', response => {
            const data = response.val()
            let newArray = []
            for (let key in data) {
                console.log(data[key])
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
                                <input type="radio" id="radio" name='one' value={'yes', radioOne} onChange={handleRadio}  />
                            </div>
                            <div>
                                <label htmlFor="radio" >Would Not Repurchase</label>
                                <input type="radio" id="radio" name='two' value={'no', radioTwo} onChange={handleRadio} />
                            </div>
                        </div>

                        <input type="submit" value="Post" className="submitButton" />
                    </form>
                </div>
            </div>

            {
                reviews.length > 0 ?
                    <ul className="reviewsSection">
                        {
                            reviews.map((review, index) => {
                                console.log(review.review)
                                return (
                                    <li key={index}>
                                        <h3>{review.name}</h3>
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