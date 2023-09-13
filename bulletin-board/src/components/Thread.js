import React from 'react'
import NewPost from './NewPost';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Thread = () => {
    const baseUrl = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com';
    const [posts, setPosts] = useState([]);
    const { threadId } = useParams();

    const fetchPosts = () => {
        fetch(`${baseUrl}/threads/${threadId}/posts`, {method: 'GET', mode: 'cors'})
        .then(res => res.json())
        .then(data => {
            setPosts(data.posts);
            console.log(data);
        })
        .catch(e => {
            console.error(e.message);
            setPosts(undefined);
        });
    }

    useEffect(() => {
        fetchPosts();
    }, [threadId])

    

  return posts != undefined ?
    <div>
        <h2>New posts</h2>
        <ul className='list'>
            {posts.map((post) => 
                <li key={post.id} className='list-item'>{post.post}</li>
            )}
        </ul>
        <NewPost fetchPosts = {fetchPosts} threadId = {threadId}/>
    </div>
    : <div>Posts not found</div>
}

export default Thread