import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
    const {
        todos, handleChangeProps, deleteTodoProps, setUpdate,
    } = props;

    return (
        <ul
            className="list-group"
        >
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={handleChangeProps}
                    deleteTodoProps={deleteTodoProps}
                    setUpdate={setUpdate}
                />
            ))}
        </ul>
    );
};

TodosList.propTypes = {
    todos: PropTypes.arrayOf.isRequired,
    handleChangeProps: PropTypes.func.isRequired,
    deleteTodoProps: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,
};

export default TodosList;