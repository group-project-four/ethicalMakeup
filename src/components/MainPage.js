import { Routes, Route, Link } from 'react-router-dom'
import NavbarTop from './NavbarTop'
import ProductPage from './ProductPage'
import Posts from './Posts'
import Pagination from './Pagination'
const MainPage = () => {
    const [products, setProduct] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const handleQuery = (query) => {
        axios({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_type: query,
            }
        }).then((response) => {
            if(response.data.length !== 0){
                // const firstTwenty = response.data.slice(0, 20)
                // setProduct(firstTwenty)
                setProduct(response.data)
                console.log(response.data)
                setProduct(response.data) 
                setLoading(false)
                setErrorMessage('')
            }else(
                setErrorMessage('please enter a valid search term')
            )
        })
    }

    const handleChangeOption = (event) => {
        console.log(event.target.value)
        if(event.target.value == 'alphabetical'){
            const orderedProducts = currentPosts.sort((a, b) => {
                return a.name > b.name
            })
        }
    }

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const filteredPrice = currentPosts.filter((productFiltered) => {
        return productFiltered.price > 0.0
    })

    return (
        <div>
            <ul>
            <NavbarTop handleQuery={handleQuery} />
            {errorMessage}
            <section>
                <label htmlFor="sorting"></label>
                <select name="sorting" id="sorting" onChange={handleChangeOption}>
                    <option value="price">price</option>
                    <option value="alphabetical">alphabetical</option>
                    <option value="rating">rating</option>
                </select>
            </section>
            <ul>
                {
                    filteredPrice.map(product => {
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
            <Posts products={currentPosts} loading={loading}/>
            <Pagination postsPerPage={postsPerPage} totalPosts = {products.length} paginate={paginate}/>

            </ul>

            {errorMessage}
        </div>
    )
}
export default MainPage