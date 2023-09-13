import React, { useState } from 'react';

const NewThread = () => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newThreadData = { title: title };
    const baseUrl = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com';
    const apiUrl = `${baseUrl}/threads`;

    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newThreadData),
    };

    fetch(apiUrl, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log('POST request succeeded:', data);
        alert(`User created a new thread: ${data.title}`);
        
      })
      .catch((e) => console.error(e.message));
  };

  return (      
  <>
    <h2>New Thread</h2>

    <div className="new-thread">
      <form  onSubmit={handleSubmit}>
        <div>
          <label>Thread Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
            maxLength={20}
          />
        </div>
        <button className="btn" type="submit">post</button>
      </form>
    </div>

  </>
  );
}

export default NewThread;
