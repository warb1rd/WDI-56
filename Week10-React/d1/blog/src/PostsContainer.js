import React from "react"
import "./App.css"
import SinglePost from "./SinglePost.js"

const postData = [
    {title: "Hello World", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quos consequuntur facere saepe ea harum quidem numquam iste laudantium, blanditiis, mollitia ab? Doloribus, laboriosam molestias. Amet, modi magni? Sequi, odit?", _id: 123},
    {title: "Hola Mundo", body: "post 2", _id: 234},
    {title: "Namaste Duniya", body: "post 3", _id: 345}
]

const PostsContainer = () => {
    return (
        <div className="PostsContainer">
            {postData.map((postObj) => {                                                                                              //Map will create a new array for us to work with
                return <SinglePost post={postObj} key={postObj._id}/>                                                                 //Building HTML based on whats inside an existing array.            
            })}            
        </div>
    )
}

export default PostsContainer