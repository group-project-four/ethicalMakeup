import { Link } from "react-router-dom"

const Notable = (props) => {
    return (
        <ul>
            {
                props.array.map((item,index) => {
                    return (
                        <li key={index}>
                            <Link to={`/${item.id}`}>
                                <img src={item.api_featured_image} alt={item.name} />
                            </Link>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default Notable