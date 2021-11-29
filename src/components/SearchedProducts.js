import { Link } from 'react-router-dom'
const SearchedProducts = (props) => {
    console.log(props)

    if(props){
        return (
            <div>
                <ul>
                
                    {
                        props.filteredPrice.map(product => {
                            return (
                                <div key={product.id}>
                                    {product.name}
                                    <Link to={`/${product.id}`}>
                                        <img
                                            src={product.image_link}
                                            alt={`product of ${product.brand} company`}
                                        />
                                    </Link>
                                    {product.price}{product.price_sign}
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
        
    }else{
        return(
            <div></div>
        )
    }

}
export default SearchedProducts