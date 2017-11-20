import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';
import icon from './../../Images/code-icon.ico';

class Header extends Component {
    render(){
        return (
            <div>
                <img src={icon} alt= 'spinning icon' />
                <Link to='/' >
                <p>Home</p>
                </Link>
                <Link to='/instructions' >
                <p>Router Instructions</p>
                </Link>
                <Link to='/page1' >
                <p>Page 1</p>
                </Link>
                <Link to='/page2' >
                <p>Page 2</p>
                </Link>
            </div>
        )
    }
}

export default Header