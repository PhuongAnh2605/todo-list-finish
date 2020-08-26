import React, {Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import check from './check.png';
import checkDone from './check-done.png';

class TodoItem extends Component{
    render(){
        const {item, onClick} = this.props;
        let url = check;
        if(item.isComplete){
            url = checkDone;
        }
        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <img onClick={onClick} src={url} width={32} height={32}></img>
                <p >{this.props.item.title}</p>
            </div>
        );
    }
}
export default TodoItem;