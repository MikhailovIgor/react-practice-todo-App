import React, {Component} from "react";
import './main-input.css';

export default class MainInput extends Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
       this.setState({
           label: event.target.value
       });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

   render() {
       return (
           <form className='newTodo'
           onSubmit={this.onSubmit}>
               <input className='mainInput'
                      type="text"
                      autoFocus={true}
                      placeholder="Whats needs to be done?"
                      onChange={this.onLabelChange}
                      value={this.state.label}
               />
           </form>
       )
   }
};
// preventDefault()