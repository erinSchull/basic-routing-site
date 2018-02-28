import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div className='home-page' >
                <div>
                    <h1>Welcome to Erin's Amazing Routing App</h1>
                    <h2 className='home-sub' >To Come:</h2>
                    <ol>
                        <li>To Do List</li>
                        <li>Sass Styling</li> 
                        <li>User Functionality!!</li>
                    </ol>
                </div>
                <div className='second-div' >
                    <p>Here's a basic dropdown (just practicing different html):</p>
                    <select>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>

            </div>
        )
    }
}

export default Home