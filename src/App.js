import React from 'react';
import Tasks from './Components/Tasks';
import { render } from 'react-dom';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      currentId: 0,
      text: '',
      taskList: [],
      iterator: 0,
      itemCount: 0
    }
  }
  
  render(){
    return(
    <div className="App">
      <h1>Hello</h1>
      <button onClick={this.onAllButtonClick}> All</button>
      <button onClick={this.onActiveButtonClick}>Active </button>
      <button onClick={this.onCompleteButtonClick}>Complete </button>
      <button onClick={this.onClearButtonClick}>Clear Completed </button>
      <p>{this.state.itemCount} item(s) left</p>
      <input type='text' value= {this.state.text} onChange= {this.inputChangeHandler} />
      <button onClick= {this.onAddButtonClick}>Ass</button>
      <div id='taskContainer'> 
        {this.renderTasks(this.state.taskList)}
      </div>
    </div>
    );
  }

  renderTasks = (taskList) => {
    console.log(taskList);
    return <Tasks task= {taskList} onStatusChange = {this.onStatusChange} onDeleteChange = {this.onDeleteChange}></Tasks>
  }

  onStatusChange = (id) => {
    const taskList = this.state.taskList;
    taskList.forEach(task => {
        if(task.id === id){
          task.status = 'complete';
        }
    });
    return this.setState({taskList});
  };

  onDeleteChange = (id) => {
    const taskList = this.state.taskList;
    const itemCount = this.state.itemCount;
    const fltered = taskList.filter((task) => {
        return task.id !== id
    });
    this.setState({taskList : fltered});
    this.setState({itemCount: itemCount - 1});
  };
  
  inputChangeHandler = (e) => {
    this.setState({text: e.target.value})
  };

  onAddButtonClick = (e) => {
    const taskList = this.state.taskList;
    const iterator = this.state.iterator;
    const itemCount = this.state.itemCount;
    taskList.push({id: iterator + 1, status: 'active', text: this.state.text, show: true});
    this.setState({taskList});
    this.setState({text: ''});
    this.setState({itemCount: itemCount + 1});
    this.setState({iterator: iterator + 1});
  };
  
  onAllButtonClick = (e) => {
    const filtered = this.state.taskList;
    filtered.forEach((task) => {
        task.show = true;
    });     
    this.setState({itemCount: this.state.taskList.length}); 
    this.setState({taskList: filtered})
    // return (this.renderTasks(filtered));     
  };

  onActiveButtonClick = (e) => {      
    const filtered = this.state.taskList;
    filtered.forEach((task) => {
      if(task.status !== 'active'){
        task.show = false;
      }
      else{
        task.show = true;
      }
    });
    this.setState({itemCount: filtered.length});  
    this.setState({taskList: filtered})
    // return (this.renderTasks(filtered));
  };

  onCompleteButtonClick = (e) => {
    const filtered = this.state.taskList;
    filtered.forEach((task) => {
      if(task.status !== 'complete'){
        task.show = false;
      }
      else{
        task.show = true;
      }
    });
    this.setState({itemCount: filtered.length});  
    this.setState({taskList: filtered})
    // return (this.renderTasks(filtered));      
  };

  onClearButtonClick = (e) => {
    const filtered = this.state.taskList.filter((task) => {
      return task.status === 'active'
    });
    this.setState({itemCount: filtered.length});  
    this.setState({taskList: filtered})
    //return (this.renderTasks(filtered));    
  }
}

export default App;