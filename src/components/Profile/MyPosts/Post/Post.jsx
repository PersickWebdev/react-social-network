import React from 'react';
import style from './Post.module.css';
import defaultPostAvatar from '../../../../assets/images/postDefaultAvatar.png';

const Post = (props) => {
    const deleteOnClick = () => {
        props.deletePost(props.id);
    }

    return (
        <div className={style.item}>
            <div className={style.avatarMessage}>
                <div className={style.avatar}>
                    <img
                        src={defaultPostAvatar}/>
                </div>
                <div className={style.message}>
                    {props.message}
                </div>
            </div>
                <div className={style.likes}>
                    <span>Likes: {props.likes}</span>
                </div>
                <div>
                    <button className={style.form__button} onClick={deleteOnClick}>Delete</button>
                </div>
        </div>
    )
}

export default Post;