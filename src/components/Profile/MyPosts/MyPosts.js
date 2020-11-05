import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.postData.map((post) => <Post text={post.text} like={post.like} />)
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
    props.updateNewPostText("")
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }
  return (
    <div className={s.content}>
      <div className={s.postBlock}>
        <h3>MyPosts</h3>
        <div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
        <div>Add post</div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  )
}
export default MyPosts