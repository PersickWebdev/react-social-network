import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageFormRedux} from "./AddNewMessageForm/AddNewMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id}/>);

    let addMessage = (values) => {
        if (!values.newMessageText) return;
        props.addMessage(values.newMessageText);
        values.newMessageText = '';
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    );

}

export default Dialogs;