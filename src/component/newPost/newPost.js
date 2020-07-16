import React from 'react'
import n from './newPost.module.css'
import Posts from "./posts/posts";
import {reduxForm, Field} from 'redux-form'



const NewPost = (props) => {
  
    let postsElement = props.profile.posts.map( cikl => <Posts post={cikl.post} like={cikl.like} />)

    
    let send = (value) =>{
     props.addPost(value.new_post)
}

let textChanger = (e) => {
    let post = e.target.value
    props.textValue(post)
}
    return (
        <div className={n.newPost}>
            <div>
                <PostFormRedux onSubmit={send}/>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )


};

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component="input" name="new_post"/>
                <div className={n.button}>
                <button>Post</button>

        </div>
    </form>
}

const PostFormRedux = reduxForm({form: "AddNewPost"})(PostForm)

export default NewPost;