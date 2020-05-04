import React from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css';
import Service from "../service";

export default class TodoList extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { todos } = this.props;

        const service = new Service();

       if(this.props !== prevProps) {
           console.log('todoList has been changed', todos);

           // service.changeData()
       }



    }

    render() {
        const { todos, onDeleted, onChanged } = this.props;

        return (
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
    }
}


/*const TodoList = ({ todos, onDeleted, onChanged }) => (
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



export default TodoList;*/