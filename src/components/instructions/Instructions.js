import React, { Component } from 'react';

import './Instructions.css';

class Instructions extends Component {
    render() {
        return (
            <div>
                <h1>Here's What I've learned regarding routing:</h1>

                <div>

                    <h3>First:</h3>
                    <p>Install the dependency of react-router-dom so that package.json is prepared to route</p>

                    <h3>Second:</h3>
                    <p>In all honesty, I forgot this until later, but in the index.js file in the src folder, wrap the app component with HashRouter, 
                        after importing it from react-router-dom (yes, same thing that was installed)</p>
                    <p>Don't forget to- still in the index file- import and invoke unregister from registerServiceWorker to avoid bugs</p>


                    <h3>Third:</h3>
                    <h4>Set up Routing</h4>
                    <p> After components are made, import them into the new file router.js in the src folder, importing Switch and Route from react-router-dom.</p>
                    <p>This is when we set up the routes within the export default (now is a good time to double check if the export default is set up in each component).</p>
                    <p>Remember exact path can, and should (usually- case by case), be used, especially for the home component.</p>

                    <h3>Fourth:</h3>
                    <p>On the home page or header, set up links to each component- user friendly</p>
                    <p>Wherever links are inputted, remember to import Link from- you guessed it- react-router-dom.</p>
                    <p>This way, the path does not need to have the hash (#) included</p>

                </div>
                <p>Putting space at the bottom</p>
            </div>
        )
    }
}

export default Instructions