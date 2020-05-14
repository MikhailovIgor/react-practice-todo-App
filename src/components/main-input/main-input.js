import React, {useState} from "react";
import './main-input.css';

const MainInput = ({ onItemAdded }) => {

    const [label, setLabel] = useState('');

    return (
        <form className='newTodo'
              onSubmit={(e) => {
                  e.preventDefault();
                  onItemAdded(label);
                  setLabel('');
              }}>
            <input className='mainInput'
                   type='text'
                   autoFocus
                   placeholder='Whats needs to be done?'
                   onChange={({target: {value}}) => {
                       setLabel(value);
                   }}
                   value={label}>
            </input>
        </form>
    );
}

export default MainInput;

//  export default class MainInput extends Component {
//
//     state = {
//         label: ''
//     }
//
//     // onLabelChange = ({ target: { value } }) => {
//     //    this.setState({
//     //        label: value
//     //    });
//     // };
//
//     onSubmit = (e) => {
//         e.preventDefault();
//         this.props.onItemAdded(this.state.label);
//         this.setState({
//             label: ''
//         });
//     };
//
//    render() {
//        return (
//            <form className='newTodo'
//            onSubmit={this.onSubmit}>
//                <input className='mainInput'
//                       type="text"
//                       autoFocus
//                       placeholder="Whats needs to be done?"
//                       onChange={({ target: { value } }) => {
//                           this.setState({
//                               label: value
//                           });
//                       }}
//                       value={this.state.label}
//                />
//            </form>
//        )
//    }
// };