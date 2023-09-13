import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const NewPost = (props) => {
  const [post, setPost] = useState('');

  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPostData = { post: post };
    const baseUrl = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com';
    const apiUrl = `${baseUrl}/threads/${props.threadId}/posts`;

    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPostData),
    };

    fetch(apiUrl, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log('POST request succeeded:', data);
        alert(`User created a new comment: ${data.post}`);
        props.fetchPosts();
      })
      .catch((e) => console.error(e.message));
  };

  return (      
    <div className="new-thread">
      <form  onSubmit={handleSubmit}>
        <div>
          <label>Leave your comment here!:</label>
          <input
            type="text"
            value={post}
            onChange={handlePostChange}
            required
            maxLength={50}
            size={50}
          />
        </div>
        <button className="btn" type="submit">post</button>
      </form>
    </div>
  );
}

export default NewPost;
