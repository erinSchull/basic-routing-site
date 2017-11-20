import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to Erin's Amazing Routing App</h1>
                    <h2>To Come:</h2>
                    <ol>
                        <li>To Do List</li>
                        <li>Basic back end</li>
                        <li>Sass Styling</li>
                        <li>User Functionality!!</li>
                    </ol>
                </div>
                <div>
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