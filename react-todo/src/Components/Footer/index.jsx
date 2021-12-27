import React, {Component} from 'react';
import PropTypes, {func} from "prop-types";
import './index.css'

class Footer extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAllTodo: PropTypes.func.isRequired,
        clearAllDone: PropTypes.func.isRequired
    }
    hasDone = () => {
        const {todos} = this.props;
        return todos.filter(todoObj => {
            return todoObj.done === true;
        }).length;
    }

    handleCheckAll = (e) => {
        this.props.checkAllTodo(e.target.checked);
    }

    handleClearAllDone = () => {
        this.props.clearAllDone();
    }
    render() {
        const {todos, clearAllDone} = this.props;
        return (
            <div className='todo.footer'>
                <label>
                    <input
                        type="checkbox"
                        checked={this.hasDone() === todos.length && todos.length !== 0}
                        onChange={this.handleCheckAll}
                    />
                </label>
                <span>
                <span>已完成{this.hasDone()}</span> / 全部{todos.length}</span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;
