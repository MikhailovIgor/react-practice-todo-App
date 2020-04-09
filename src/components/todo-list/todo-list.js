import React from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css';

/*export default class TodoList extends React.Component {

}*/

const TodoList = ({ todos, onDeleted, onChanged }) => (
           <ul className='ulItems' >
            { todos.map( ({ id, ...itemProps }) => (
                            //const { id, ...itemProps } = item;
                                 <li className='item' key={id}>
                                 <TodoListItem
                                     {...itemProps}
                                     onDeleted = { ()=> onDeleted(id)}
                                     onChanged={ ()=> onChanged(id)}
                                  />
                                 </li>
                            ))
            }
        </ul>
)



export default TodoList;