import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'
const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.activ}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.activ}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem