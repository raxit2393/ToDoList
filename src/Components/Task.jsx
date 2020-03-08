import React from 'react';
import { render } from 'react-dom';

class Task extends React.Component{   

    render(){

        return(  
            <div className={this.props.objTask.show ? '' : 'hidden'}>
                <li id = {this.props.objTask.id} >
                    <button onClick={() => this.props.onStatusChange(this.props.objTask.id)}>{this.props.objTask.status}</button>
                    <span> {this.props.objTask.text} </span>
                    <button onClick={() => this.props.onDeleteChange(this.props.objTask.id)}> Delete</button>
                </li> 
            </div>                                
        );        
    }
}

export default Task;