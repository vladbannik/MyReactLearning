import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo imageSrc="https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-27.jpg"
        description='описание профиляяя)))' />
      <MyPosts postData={props.state.posts} newPostText={props.state.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
    </div>
  )
}
export default Profile