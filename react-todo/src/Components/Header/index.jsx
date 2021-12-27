import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {nanoid} from "nanoid";
import './index.css'

class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    handleKeyUp = (e) => {
        const {keyCode, target} = e;
        if (keyCode !== 13) return;
        if (!target.value.trim()) {
            alert('请输入内容！');
            return;
        }
        const todoObj = {id: nanoid(), name: target.value, done: false};
        this.props.addTodo(todoObj);
        target.value = '';
    }
    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder='请输入任务内容'/>
            </div>
        );
    }
}

export default Header;
