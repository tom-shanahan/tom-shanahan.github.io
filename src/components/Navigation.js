import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/"></NavLink>
            <NavLink to="/about"></NavLink>
            {/*<NavLink to="/contact">Contact</NavLink>*/}
        </div>
    );
}

export default Navigation;
