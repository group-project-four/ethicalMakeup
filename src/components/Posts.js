
function Post({ products }) {
    //takes in all the products maps 
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