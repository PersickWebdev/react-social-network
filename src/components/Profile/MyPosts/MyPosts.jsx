import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {AddPostFormRedux} from "./AddNewPostForm/AddNewPostForm";

const MyPosts = React.memo((props) => {
    let postsElements = [...props.posts].reverse().map(p => <Post id={p.id} message={p.message} likes={p.likes} {...props}/>);

    let addPost = (values) => {
        if (!values.newPostText) return
        props.addPost(values.newPostText);
        values.newPostText = '';
    }

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
})

export default MyPosts;