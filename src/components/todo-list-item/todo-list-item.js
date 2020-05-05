import React, {Component} from "react";
import './todo-list-item.css'
// import Service from "../service";

export default class TodoListItem extends Component {

    state = {
        checked: false,

    };

    handleChangeStatus = () => {
       this.setState((state) => {
           return {
               checked: !state.checked
           }
       })
    };

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(prevState.checked !== this.state.checked) {
    //         console.log(this.state.checked);
    //         fetch('http://localhost:3001/myTodoList', {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json;charset=utf-8'
    //             },
    //             body: JSON.stringify({
    //
    //             })
    //
    //         })
    //             .then()
    //     }
    //
    // }

    render() {
        const { label, onDeleted, onChanged } = this.props;
        const {checked} = this.state;

        let classNames = 'text notDone';
        if (checked) {
            classNames = 'text done'
        }

        return (
            <div className='item'>
                <input className='checkInput'
                       type='checkbox'
                       onChange={this.handleChangeStatus}
                       onClick={onChanged} />
                    <label className={classNames} /*onClick={() => console.log(`done ${label}` )}*/ >
                        { label }
                    </label>
                <button className='delete'
                        type='button'
                        onClick={onDeleted}>
                </button>
            </div>
        )
    }
}
