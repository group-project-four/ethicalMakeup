
function Post({ products }) {
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