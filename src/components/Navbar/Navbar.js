import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activLink}>Message</NavLink>
      </div>
      <div className={`${s.item} ${s.activ}`}>
        <NavLink to="/music" activeClassName={s.activLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/setting" activeClassName={s.activLink}>Setting</NavLink>
      </div>
      <Sidebar props={props.state.sidebar} />

    </nav>
  )
}
export default Navbar