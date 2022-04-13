import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    const [state, setState] = useState({ editing: false });
    const { editing } = state;

    const {
        todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = props;
    const { id, completed, title } = todo;
    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.75,
        textDecoration: 'line-through',
    };

    const handleEditing = () => {
        setState({ editing: true });
    };

    const handleUpdatedDone = (e) => {
        if (e.key === 'Enter') {
            setState({ editing: false });
        } else if (e.type === 'blur') {
            setState({ editing: false });
        }
    };

    const viewMode = {};
    const editMode = {};

    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }

    return (
        <li className="item">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => handleChangeProps(id)}
            />
            <div onDoubleClick={handleEditing} className="todoTitle" style={completed ? { ...completedStyle, ...viewMode } : viewMode}>
                {title}
            </div>
            <input
                type="text"
                value={title}
                style={editMode}
                className="todoTitle"
                onChange={(e) => {
                    setUpdate(e.target.value, id);
                }}
                onKeyDown={handleUpdatedDone}
                onBlur={handleUpdatedDone}
            />
            <button
                type="button"
                onClick={() => deleteTodoProps(id)}
                className="removeBtn"
            >
                Delete
            </button>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.shape.isRequired,
    handleChangeProps: PropTypes.func.isRequired,
    deleteTodoProps: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;