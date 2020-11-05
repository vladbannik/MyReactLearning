import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = (props) => {
  return (
    <div >
      {props.props.text}
    </div>
  )
}
export default Sidebar