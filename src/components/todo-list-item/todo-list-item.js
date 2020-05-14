import React from "react";
 import './todo-list-item.css'

const TodoListItem = (props) => {

const {label, checked, onDeleted, onChanged} = props;

    return (
        <div className='item'>
            <input className='checkInput'
                   type='checkbox'
                   onChange={onChanged}/>
            <label className={checked ? 'done' : 'notDone'}>
                {label}
            </label>
            <button className='delete'
                    type='button'
                    onClick={onDeleted}>
            </button>
        </div>
    );
}

export default TodoListItem;

// export default class TodoListItem extends React.Component {
//
//     render() {
//         const { label, checked, onDeleted, onChanged } = this.props;
//
//         return (
//             <div className='item'>
//                 <input className='checkInput'
//                        type='checkbox'
//                        onChange={onChanged} />
//                     <label className={checked ? 'done' : 'notDone'}>
//                         { label }
//                     </label>
//                 <button className='delete'
//                         type='button'
//                         onClick={onDeleted}>
//                 </button>
//             </div>
//         )
//     }
// }

