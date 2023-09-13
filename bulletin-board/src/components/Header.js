import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <h1><Link to='/'>{props.title}</Link></h1>
            <Link to='/new'>Start a New Thread!</Link>
        </header>
    )
}

export default Header;