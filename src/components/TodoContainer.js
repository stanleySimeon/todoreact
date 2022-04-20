import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    componentDidMount() {
        const temp = localStorage.getItem('todos');
        const loadedTodos = JSON.parse(temp);
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos,
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { todos } = this.state;
        const { prevTodos } = prevState;
        if (prevTodos !== todos) {
            const temp = JSON.stringify(todos);
            localStorage.setItem('todos', temp);
        }
    }

    addTodoItem = (title) => {
        const { todos } = this.state;
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false,
        };
        this.setState({
            todos: [...todos, newTodo],
        });
    };

    setUpdate = (updatedTitle, id) => {
        this.setState((state) => ({
            todos: state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        title: updatedTitle,
                    };
                }
                return todo;
            }),
        }));
    };

    deleteTodo = (id) => {
        this.setState((state) => {
            const { todos } = state;
            return {
                todos: [
                    ...todos.filter((todo) => todo.id !== id),
                ],
            };
        });
    };

    handleChange = (id) => {
        this.setState((state) => ({
            todos: state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            }),
        }));
    };

    render() {
        const { todos } = this.state;
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodosList
                        todos={todos}
                        handleChangeProps={this.handleChange}
                        deleteTodoProps={this.deleteTodo}
                        setUpdate={this.setUpdate}
                    />
                </div>
            </div>
        );
    }
}

export default TodoContainer;