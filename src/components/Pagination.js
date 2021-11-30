function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers =[]
    for(let i =1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
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