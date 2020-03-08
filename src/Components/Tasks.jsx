import React from 'react';
import Task from './Task';
import { render } from 'react-dom';


class Tasks extends React.Component{       
    constructor(){
        super();
    }

    render(){
        return(       
            <div>                   
                {this.createTask(this.props.task)}
            </div>
        );
    }

    createTask = (taskList) => {            
        const listItems = taskList.map((task) => 
        <li>
            <Task objTask={task} onStatusChange={this.props.onStatusChange} onDeleteChange={this.props.onDeleteChange}/>
        </li>            
        );
        return (<ul>{listItems}</ul>);
    }
}

export default Tasks;