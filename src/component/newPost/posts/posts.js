import React from 'react';
import p from './posts.module.css'

const Posts = (props) => {
    return (
        <div className={p.posts}>
            {props.post}
            <p> Likes: {props.like} </p>
        </div>
    )
};

export default Posts;
