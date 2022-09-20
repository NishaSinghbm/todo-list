
import React, { useState } from 'react';
import './style/App.css';
import Header from './components/static/Header';
import Input from "./components/static/Input.js";
import TodoList from './components/dynamic/TodoList';
import Footer from './components/dynamic/Footer';

function App() {
  const [todo,setTodo]=useState([]);
  const [show, changeShowStatus] = useState('all');

  const addTask = (task)=>{
    if(task !== '')
      setTodo([...todo, {id: Date.now(), task: task, isCompleted: false}]);
  }

  const clearCompleted = ()=> {
    setTodo(todo.filter((Element) => {return Element.isCompleted === false}));
  }

  const toggleShowlist = () => {
    if(todo.length > 0)
      return(
        <React.Fragment>
          {filter()}
          <Footer length = {length} changeShowStatus = {changeShowStatus} show = {show} handleClearCompleted = {clearCompleted} />
        </React.Fragment>
      )
  }

  const toggleStatus = (id) => {
    const index = todo.findIndex((obj => obj.id === id));
    todo[index].isCompleted = !todo[index].isCompleted;
    setTodo([...todo]);
  }

  const length = (filter) => {
    if(filter === 'notCompleted'){
      const notCompletedList = [...todo.filter((Element) => {return Element.isCompleted === false})];
      return notCompletedList.length;
    }
    if(filter === 'completed'){
      const notCompletedList = [...todo.filter((Element) => {return Element.isCompleted === true})];
      return notCompletedList.length;
    }
    return todo.length;
  }

  const filter = () =>{
    if(show === 'active')
      return <TodoList editTask = {editTask} del = {deleteTask} toggleStatus = {toggleStatus} TodoList = {todo.filter((Element) => {return Element.isCompleted === false})}/>;
    if(show === 'completed')
      return <TodoList editTask = {editTask} del = {deleteTask} toggleStatus = {toggleStatus} TodoList = {todo.filter((Element) => {return Element.isCompleted === true})}/>;
    if(show === 'all')
      return <TodoList editTask = {editTask} del = {deleteTask} toggleStatus = {toggleStatus} TodoList = {todo}/>;
  }

  const checkIfAllChecked = ()=>{
    if( todo.findIndex((obj => obj.isCompleted === false)) === -1)
      return true;
    return false;
  }

  const editTask = (id,newtask) => {
    const index  = todo.findIndex((obj => obj.id === id));
    todo[index].task = newtask;
    setTodo([...todo]);
  }

  const deleteTask = (id) => {
    const index  = todo.findIndex((obj => obj.id === id));
    todo.splice(index,1);
    setTodo([...todo]);
  }

  const handleMasterCheck = ()=>{
    if(checkIfAllChecked()){
      todo.forEach((Element)=>{
        Element.isCompleted = false;
      })
    }
    else{
      todo.forEach((Element)=>{
        Element.isCompleted = true;
      })
    }
    setTodo([...todo]);
  }

  return (
    <div className="App">
      <Header/>
      <div id="inputBox">
        <Input addTask = {addTask}/>
        {todo.length>0?
          <input checked = {checkIfAllChecked()} onChange={handleMasterCheck} type="checkbox" name="checkCompleted" id="checkCompleted" />:""
        }
      </div>
      {toggleShowlist()}
    </div>
  );
}

export default App;