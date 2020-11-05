import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src={props.imageSrc} alt="" />
            </div>
            <div className={s.ProfileDescription}>{props.description}</div>
        </div>

    )
}
export default ProfileInfo