
function Post({ products, loading }) {
    if (loading) {
        return <h2>Loading..</h2>
    }
    
    return (
        <ul>
            {products.map(product =>
                <li key={product.id} className="listGroupItem">
                    {product.title}
                </li>
            )}
        </ul>
    )
}
export default Post