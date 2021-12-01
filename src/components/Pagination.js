
function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers =[]

    //a loop to number of pages which is total devided by posts per page, rounded by using math.ceil, and push i to the empty array 
    for(let i =1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    //mapping through page numbers and use the function paginate to set the current page number
    return(
        <nav className="pageNumebrs">
            {pageNumbers.map(number => 
                <li key={number}>
                    <a onClick={() => paginate(number)} href="#">
                        {number}
                    </a>
                </li>
            )}
        </nav>
    )
}

export default Pagination