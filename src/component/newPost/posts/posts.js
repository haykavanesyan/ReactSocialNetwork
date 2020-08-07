import React from 'react';
import p from './posts.module.css'

const Posts = (props) => {
    return (
        <div className={p.posts}>
            <p className={p.post}>{props.post}</p>
            <span className={p.like}>Likes: {props.like}</span>
            <span className={p.comment}>Comments: 0</span>
            <span className={p.share}>Share: 0</span>
        </div>
    )
};

export default Posts;
