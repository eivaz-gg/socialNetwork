import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return (
    <div className={s.item}>
        <img src='https://i-fakt.ru/wp-content/uploads/2018/09/samurai-fakty.jpg' />
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
    )
}

export default Post;
