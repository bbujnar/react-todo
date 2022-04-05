import './App.css';
import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Footer from './Footer';


class App extends React.Component{
  
  counter = 4; 

  state ={
    tasks:[
      {
        id: 0,
        text: 'Zagrac w gre',
        date: '2022-10-05',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'Rozwiazac krzyzowke',
        date: '2022-10-05',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'Umyc szyby',
        date: '2022-10-05',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'Wyprowadzic sie',
        date: '2022-10-05',
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  }

  handleDeleteTask= (id)=>{
    const tasks= [...this.state.tasks];
    const index= tasks.findIndex(task => task.id===id);
    tasks.splice(index,1);
    this.setState({tasks})
  }

  handleEndTask= (id)=>{
    const tasks= [...this.state.tasks];
    const date= new Date().getTime();
    tasks.forEach(task=>{
      if(task.id===id){
        task.active= false;
        task.finishDate= date;
      }
    })
    this.setState({
      tasks
    })
  }

  addTask= (text, date, important)=>{

    const task = {
        id: this.counter,
        text,
        date,
        important,
        active: true,
        finishDate: null,
    }
    this.counter++;

    this.setState(prevState =>({
      tasks: [...prevState.tasks, task],
    }))

    return true;
  }


  render(){
    return(
      <div>
        <AddTask add={this.addTask}/>
        <TaskList 
          tasks={this.state.tasks} 
          delete={this.handleDeleteTask} 
          done={this.handleEndTask}
        />
        <Footer/>
      </div>
    )
  }
}

export default App;
