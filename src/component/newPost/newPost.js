import React from 'react'
import n from './newPost.module.css'
import Posts from "./posts/posts";




const NewPost = (props) => {
  
    let postsElement = props.profile.posts.map( cikl => <Posts post={cikl.post} like={cikl.like} />)

    
    let send = () =>{
     props.addPost()
}

let textChanger = (e) => {
    let post = e.target.value
    props.textValue(post)
}
    return (
        <div className={n.newPost}>
            <div>
                <input value={props.profile.textValue} onChange={textChanger}/>
                <div className={n.button}>
                    <button onClick={send} >Post</button>

                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )


};

export default NewPost;