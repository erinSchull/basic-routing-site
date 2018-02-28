import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import icon from './../../Images/code-icon.ico';

class Header extends Component {
    render(){
        return (
            <header className='header' >
                <img src={icon} alt= 'spinning icon' />
                <Link className = 'links' to='/' >
                <p>Home</p>
                </Link>
                <Link className = 'links' to='/instructions' >
                <p>Router Instructions</p>
                </Link>
                <Link className = 'links' to='/sass' >
                <p>All about that Sass</p>
                </Link>
                <Link className = 'links' to='/to-do' >
                <p>To Do List</p>
                </Link>
            </header>
        )
    }
}

export default Header