import React, {Component} from 'react';
import PropTypes from "prop-types";
import Item from '../Item'
import './index.css'

class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }
    render() {
        const {todos, updateTodo, deleteTodo} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        return <Item
                                {...todo}
                                deleteTodo={deleteTodo}
                                updateTodo={updateTodo}
                                key={todo.id}
                               />
                    })
                }
            </ul>
        );
    }
}

export default List;
