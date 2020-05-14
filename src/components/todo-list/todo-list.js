import React from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = (props) => {

    const {todos, onDeleted, onChanged} = props;

    return (
        <ul className='ulItems'>
            {todos.map(({checked, id, ...itemProps}) => (
                //const { id, ...itemProps } = item;
                <li className='item' key={id}>
                    <TodoListItem
                        {...itemProps}
                        id={id}
                        checked={checked}
                        onDeleted={() => onDeleted(id)}
                        onChanged={() => onChanged(checked, id)}
                    />
                </li>
            ))
            }
        </ul>
    )
}

export default TodoList;

// export default class TodoList extends React.Component {
//
//     render() {
//         const {todos, onDeleted, onChanged} = this.props;
//
//         return (
//             <ul className='ulItems'>
//                 {todos.map(({checked, id, ...itemProps}) => (
//                     //const { id, ...itemProps } = item;
//                     <li className='item' key={id}>
//                         <TodoListItem
//                             {...itemProps}
//                             id={id}
//                             checked={checked}
//                             onDeleted={() => onDeleted(id)}
//                             onChanged={() => onChanged(checked, id)}
//                         />
//                     </li>
//                 ))
//                 }
//             </ul>
//         )
//     }
// }
