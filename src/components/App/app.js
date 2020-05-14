import React from 'react';
import {v4 as uuidv4} from 'uuid';

import Service from "../service";
import AppHeader from '../app-header';
import MainInput from '../main-input';
import TodoList from '../todo-list';
import BtnFilter from '../btn-filter';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todoList: [],
            filter: 'all', //all, active, completed
            service: null
        };
    }

    componentDidMount() {
        
        const service = new Service();

        service.getData()
            .then(data => {
                this.setState(
                    {
                        todoList: data,
                        service
                    }
                )
            })
    }

    createTodoItem = (text) =>
        ({
            id: uuidv4(),
            label: text,
            checked: false
        });

    addItem = (text) => {
        const newTask = this.createTodoItem(text);

        const updatedTodoList = [
            ...this.state.todoList,
            newTask
        ];

        // отправляем на сервер. после успешного сохранения меняем в стейте
        this.state.service.addData(newTask)
            .then(() => {
                    this.setState(
                        {todoList: updatedTodoList}
                    )
                }
            ).catch((err)=> {
                console.log(err.message())
        })
    }

    onToggleChange = (flag, id) => {
        this.state.service.changeData(!flag, id)
            .then(() => {
                    this.setState(({todoList}) => {
                        const idx = todoList.findIndex(el => el.id === id);
                        const oldItem = todoList[idx];
                        const newItem = {...oldItem, checked: !oldItem.checked}

                        const updatedTodoList = todoList;
                        updatedTodoList.splice(idx, 1, {...oldItem, checked: !oldItem.checked})

                        //вариант когда есть id:

                                    // const updatedTodoList2 = todoList.map( task => {
                                    //     if(task.id !== id) {
                                    //         return task;
                                    //     }
                                    //     return {...task, checked: !oldItem.checked};
                                    // });

                        return {
                            todoList: updatedTodoList
                        };
                    })
                }
            )
    };

    deleteItem = (id) => {

        this.state.service.deleteData(id).then(
            this.setState(({todoList}) => {

                return {
                    todoList: todoList.filter(({ id: deletedId }) => deletedId !== id )
                }
            })
        )

    };

    filterInFooter(items, filter) {
        switch (filter) {
            case 'active':
                return items.filter((item) => !item.checked);
            case 'completed':
                return items.filter((item) => item.checked);
            default:
                return items;
        }
    };
    //
    // onFilterChange = (filter) => {
    //     this.setState({filter})
    // };

    render() {
        console.log("App: render")
        const {todoList, filter} = this.state;
        const todoCount = this.state.todoList.filter(({ checked }) => !checked).length;

        const visibleItems = this.filterInFooter(todoList, filter);

        return (
            <>
                <AppHeader/>
                <MainInput onItemAdded={this.addItem}/>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onChanged={this.onToggleChange}
                />
                <BtnFilter
                    count={todoCount}
                    filter={filter}
                    onFilterChange={ filter => this.setState({filter}) }
                />
            </>
        );
    };
}
