
import { Link } from "react-router-dom"

const Notable = (props) => {
    return (
        <ul className="featuredSection">
            {
                props.array.map((item) => {
                    return (
                        <li className="productItems" key={item.id}>
                            <Link to={`/${item.id}`}>
                                <img src={item.api_featured_image} alt={item.name} />
                                <div className="textContainer">
                                    <h3>{item.name}</h3>
                                    <p>$ {item.price}</p>
                                    <button>More Info</button>
                                </div>
                            </Link>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default Notable