import React, {Component} from 'react';

class page1 extends Component {
    render() {
        return (
            <div>
            <h1>Let's discuss Sass</h1>

            <p>Exciting, no?</p>
            <p>Girl, put some dang stuff here!</p>
            <p>See what I did there? ;)</p>

            <h3>Let's get down to business</h3>
            <h4>To discuss</h4>
            <h4>The Sass...</h4>
            <break />
            <h3>Step 1:</h3>
            <p>Install appropriate dependencies:</p>
            <ul>
                <li>node-sass-chokidar (no, do not need node otherwise!)</li>
                <li>npm-run-all</li>
            </ul>
            <h3>Step 2:</h3>
            <p>Set up root variables in _variables.scss in src folder</p>
            <break />
            <h3>Step 3:</h3>
            <p>Use variables in sass files, that have matching names as the components (case sensitive)</p>
            </div>
        )
    }
}

export default page1;