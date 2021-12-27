import React, {Component} from 'react';
import './index.css'

class Item extends Component {
    state = {
        mouse: ''
    }
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag});
        }
    }

    handleCheck = (id) => {
        return (e) => {
            this.props.updateTodo(id, e.target.checked);
        }
    }

    deleteBtn = (id) => {
        return () => {
            if (window.confirm('确定删除吗？')){
                this.props.deleteTodo(id);
            }
        }
    }

    render() {
        const {id, name, done} = this.props;
        const {mouse} = this.state;
        return (
            <li
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
                style={{backgroundColor: mouse ? '#ccc' : '#fff'}}
            >
                <label>
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={this.handleCheck(id)}
                    />
                    <span>{name}</span>
                </label>
                <button
                    className="btn btn-danger"
                    style={{display: mouse ? 'block' : 'none'}}
                    onClick={this.deleteBtn(id)}
                >删除</button>
            </li>
        );
    }
}

export default Item;
