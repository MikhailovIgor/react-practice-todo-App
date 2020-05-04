import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';

import Service from "../service";
import AppHeader from '../app-header';
import MainInput from '../main-input';
import TodoList from '../todo-list';
import BtnFilter from '../btn-filter';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            todoList : [],
            filter: 'all' //all, active, completed
        };
        console.log("App Constructor");
    }

    componentDidMount() {
        console.log("App Did Mount")
       const service = new Service();

        service.getData()
           .then(data => {
               this.setState(
                   {todoList: data}
               )
           })
    }

    createTodoItem(text) {

        return {
            id: uuidv4(),
            label: text,
            checked: false
        };
    }

    addItem = (text) => {
        const newTask = this.createTodoItem(text);

        const updatedTodoList = [
            ...this.state.todoList,
            newTask
        ];

        this.setState({todoList: updatedTodoList});
    };

    onToggleDone = (id) => {
        this.setState(({todoList}) => {
            const idx = todoList.findIndex( el => el.id === id);
            console.log(id);
            const oldItem = todoList[idx];
            const newItem = {...oldItem, checked: !oldItem.checked}

            const updatedTodoList = [
                ...todoList.slice(0, idx),
                newItem,
                ...todoList.slice(idx + 1)
            ];

            return {
                todoList: updatedTodoList
            };
        });
    };

    deleteItem = (id) => {

        const service = new Service();

        service.deleteData(id).then(
            this.setState(({ todoList }) => {
                const idx = todoList.findIndex( el => el.id === id);
                const updatedTodoList = [
                    ...todoList.slice(0, idx),
                    ...todoList.slice(idx + 1)
                ];
                console.log(updatedTodoList);

                return {
                    todoList: updatedTodoList
                }
            })
        )

    };

    filterInFooter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.checked);
            case 'completed':
                return  items.filter((item) => item.checked);
            default:
                return items;
        }
    };

    onFilterChange = (filter) => {
        this.setState({ filter })
    };

    render() {
        console.log("App render")
        const {todoList, filter} = this.state;
        const todoCount = this.state.todoList.filter(el => el.checked === false).length;

        const visibleItems = this.filterInFooter(todoList, filter);

        return (
            <>
                <AppHeader />
                <MainInput onItemAdded={this.addItem} />
                <TodoList
                    todos = { visibleItems }
                    onDeleted={this.deleteItem}
                    onChanged={this.onToggleDone}
                />
                <BtnFilter
                    count={todoCount}
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                />
            </>
        );
    };
}
