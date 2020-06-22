import React from 'react';
import f from './friender.module.css';
import Posts from "../../newPost/posts/posts";

const Friender = (props) => {

    return (
            <div className={f.item}>
                <div></div>

                <p>{props.post}</p>

            </div>
    );
};

export default Friender;