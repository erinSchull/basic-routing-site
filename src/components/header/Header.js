import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import routerIcon from './../../Images/router.ico';
import sassIcon from './../../Images/sass-white.png';
import toDoIcon from './../../Images/list-icon.png';
import homeIcon from './../../Images/home-icon.png';
import icon from './../../Images/code-icon.ico';

class Header extends Component {
    render(){
        return (
            <header className='header' >
                <img src={icon} alt= 'code icon' />
                <Link className = 'links' to='/' >
                <img src={homeIcon} alt='Home' className='home-icon' />
                </Link>
                <Link className = 'links' to='/instructions' >
                <img src={routerIcon} alt='Router Instructions' className='router-icon' />
                </Link>
                <Link className = 'links' to='/sass' >
                <img src={sassIcon} alt='All About That Sass' className='sass-icon' />
                </Link>
                <Link className = 'links' to='/to-do' >
                <img src={toDoIcon} alt='To Do List' className='list-icon' />
                </Link>
            </header>
        )
    }
}

export default Header