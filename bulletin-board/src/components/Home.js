import React from 'react';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const baseUrl = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com';
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/threads`, {method: 'GET', mode: 'cors'})
        .then(res => res.json())
        .then(data => {
            setThreads(data);
            console.log(data);
        })
        .catch(e => console.error(e.message));
        setThreads([]);
    }, [])

    return threads ? 
        <div>
            <h2>What's New</h2>
            <ul className='list'>
                {threads.map((thread) => {
                    const threadPath = `/thread/${thread.id}`
                    return (
                        <Link to={threadPath}  key={thread.id}>
                            <li className='list-item'>{thread.title}</li>
                        </Link>
                    )})}
            </ul>
        </div>
        : <div>Threads not found</div>
}

export default Home;