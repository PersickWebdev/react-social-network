import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friendsElements = props.friends.map(f => <Friend name={f.name} id={f.id}/>);
    return (
        <div className={style.container}>
            <div>
                <h2 className={style.friends__heading}>Friends</h2>
            </div>
            <div className={style.friends__layout}>
                { friendsElements }
            </div>
        </div>
    );
}

export default Friends;