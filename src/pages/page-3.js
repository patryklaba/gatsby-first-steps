import React from 'react';
import Link from 'gatsby-link';

const ThirdPage = () => {
    return (<div>
        <h1>Third test page</h1>
        <p>This is my first gatsby project</p>
        <Link to="/page-2">Go to second page</Link>
        <br/>
        <Link to="/">Go back to the homepage</Link>
    </div>);
}

export default ThirdPage;