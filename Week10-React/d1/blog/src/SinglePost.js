import React from "react"

const SinglePost = (props) => {
    console.log(props)
    return(
        <div className="SinglePost">
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
            {/* <small>{props.post._id}</small> */}
            
        </div>
    )
}

export default SinglePost
