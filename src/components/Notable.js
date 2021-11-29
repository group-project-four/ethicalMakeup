const Notable = (props) => {
    console.log(props)
    return (
        <ul>
            {
                props.array.map((item,index) => {
                    return (
                        <li key={index}>
                            <img src={item.api_featured_image} alt={item.name} />
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default Notable