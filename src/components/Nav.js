import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
        <nav>
            <ul>
                <h2>Plant DB</h2>
                <Link to='/'><li>Home</li></Link>
                <Link to='/plants'><li>Plants</li></Link>
            </ul>
        </nav>
    );
}
 
export default Nav;