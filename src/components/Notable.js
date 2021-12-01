
import { Link } from "react-router-dom"

const Notable = (props) => {
    return (
        <ul>
            {
                props.array.map((item,index) => {
                    return (
                        <li className="productItems" key={index}>
                            <Link to={`/${item.id}`}>
                                <img src={item.api_featured_image} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p>$ {item.price}</p>
                            </Link>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default Notable