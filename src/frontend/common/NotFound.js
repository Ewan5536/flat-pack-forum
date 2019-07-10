import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (<>
        <h1>404, Page Not Found!</h1>
        <Link to='/index'>Click here to go back! :)</Link>
    </>);
}