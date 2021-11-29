

const SortingOptions = (props) => {
    
    // const handleChangeOption = (event) => {
    //     console.log(event.target.value)
    
    //     if(event.target.value == 'alphabetical'){
    //         const orderedPrice = filteredPrice.sort((a, b) => {
    //             return a.name > b.name
    //         })
    //         filteredPrice = [...orderedPrice]
    //     }else{
    //         return filteredPrice
    //     }
    // }
    // console.log(filteredPrice)

    // return (
    //     <section>
    //         <label htmlFor="sorting"></label>
    //         <select name="sorting" id="sorting" onChange={handleChangeOption}>
    //             <option value defaultValue>Sort by</option>
    //             <option value="price">price</option>
    //             <option value="alphabetical">alphabetical</option>
    //             <option value="rating">rating</option>
    //         </select>
    //     </section>
    // )

     {/* <section>
                    <label htmlFor="sorting"></label>
                    <select name="sorting" id="sorting" onChange={handleChangeOption}>
                        <option value defaultValue>Sort by</option>
                        <option value="price">price</option>
                        <option value="alphabetical">alphabetical</option>
                        <option value="rating">rating</option>
                    </select>
                </section> */}
                {/* <SortingOptions filteredPrice={filteredPrice}/> */}
                {/* <ul>
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
                </ul> */}

                // setSortedProducts(products.slice(indexOfFirstPost, indexOfLastPost))


    // setSortedProducts(filteredPrice)

    // const handleChangeOption = (event) => {
    //     console.log(event.target.value)
    //     let orderedPrice = []
    //     if (event.target.value == 'alphabetical') {
    //         orderedPrice = sortedProducts.sort((a, b) => {
    //             return a.name > b.name
    //         })
    //     }
    //     console.log(orderedPrice)
    //     setSortedProducts(orderedPrice)
    // }
}
export default SortingOptions