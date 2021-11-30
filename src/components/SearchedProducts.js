import { Link } from 'react-router-dom'
const SearchedProducts = (props) => {
    
    function imgError(image) {
        image.target.src =
            "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    }
    return (
        <div className="sectionWrapper">
            <ul className="productSection">
                {
                    props.currentPosts.map(product => {
                        return (
                            <div key={product.id} className="productCard">
                                <Link to={`/${product.id}`}>
                                    <img
                                        src={product.image_link}
                                        alt={`product of ${product.brand} company`}
                                        onError={imgError}
                                        />
                                </Link>
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                                <button>More Info</button>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )

}
export default SearchedProducts