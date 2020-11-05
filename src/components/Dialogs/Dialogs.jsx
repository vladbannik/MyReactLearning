import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />)
    let messagesElement = props.state.messages.map((messages) => <Message message={messages.message} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs;