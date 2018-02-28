import React, { Component } from 'react';

class SassPage extends Component {
    render() {
        return (
            <div id="sass-page" >
                <h1 id="sass-title" >Let's discuss Sass</h1>
                <h3 className='biz' >Let's get down to business</h3>
                <h4 className='discuss' >To discuss</h4>
                <h4 className='sass-sub' >The Sass...</h4>
                <break />
                <h3 className='step-title' >Step 1:</h3>
                <p>Install appropriate dependencies:</p>
                <ul>
                    <li>node-sass-chokidar (no, do not need node otherwise!)</li>
                    <li>npm-run-all</li>
                </ul>
                <h3 className='step-title' >Step 2:</h3>
                <p>Set up root variables in _variables.scss in src folder</p>
                <break />
                <h3 className='step-title' >Step 3:</h3>
                <p>Use variables in sass files, that have matching names as the components (case sensitive)</p>
                <h3 className='step-title' >Step 4:</h3>
                    <strong>Important!</strong> <br />
                <p>
                To get the sass that you have now implemented, we'll need to delete the line
                    <br />
                    <code> import './app.css'</code> <br />
                     and replace it with <br /> <code>import './main.css' </code> <br /> of course minding the file path (though the given is best practice) 
                </p>
            </div>
        )
    }
}

export default SassPage;