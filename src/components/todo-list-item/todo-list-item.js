import React, {Component} from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component {

    state = {
        checked: false
    };

    handleChangeStatus = () => {
       this.setState((state) => {
           return {
               checked: !state.checked
           }
       })
    };

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
