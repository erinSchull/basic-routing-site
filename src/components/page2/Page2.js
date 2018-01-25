import React, { Component } from 'react';

class page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            todo: []
        }

        this.handleTodoClick = this.handleTodoClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        console.log(event.target.value);
        this.setState({
            input: event.target.value
        })
    }

    handleTodoClick(index, event) {
        console.log('state from click', this.state)
        let inputCopy = this.state.input.slice(); //slice to return a copy
        inputCopy.splice(index , 1);

        let todoCopy = this.state.todo.slice();
        todoCopy.push(event)
        this.setState({
            input: inputCopy,
            todo: todoCopy
        })
    }



    // addItem(val){
    //     let todoCopy = this.state.todo.slice(); //slice to return a copy
    //     todoCopy.push(val)
    //     this.setState({
    //       todo: todoCopy
    //     })
    //   }
    render() {
        return (
            <div>
                <h1>This is my todo list</h1>
                {/* <ol>
                     {this.state.todo.map((todo, i) => {
                         return(
                             <div key={i}>
                             <li>{todo}</li>
                             </div>
                         )
                     })}  
                </ol> */}
                <input type='text' value={this.state.input} onChange={this.handleInputChange} placeholder="Change me please" />
                <button onClick={this.handleTodoClick} >Update My Todo List</button>
            </div>
        )
    }
}
// onClick ={() => this.props.addItem(this.state.input)}
export default page2;