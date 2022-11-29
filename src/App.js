
import React, { useState } from 'react';
import './style/App.css';
import Header from './components/static/Header';
import Input from "./components/static/Input.js";
import TodoList from './components/dynamic/TodoList';
import Footer from './components/dynamic/Footer';
//
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

function App() {
  var [todo,setTodo]=useState([]);
  const [show, changeShowStatus] = useState('all');

  const addTask = (priority, task, date)=>{
    if(task !== ''){
      setTodo([...todo, {id: Date.now(),priority: priority, task: task, date: date , isCompleted: false}]);
    }
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
    if (todo.length !== 0) {
      if( todo.findIndex((obj => obj.isCompleted === false)) === -1)
        return true;
      }
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
    if (todo.length !== 0) {
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
  }

  return (
    <div className="App">
      <Header/>
      <div id="inputBox">
        <Input addTask = {addTask}/>
        <div id="inputCheckBox">
          <Checkbox
              checked = {checkIfAllChecked()} onChange={handleMasterCheck} type="checkbox" name="checkCompleted" id="checkCompleted" 
              icon={
                  <div
                      style={{
                      display: "flex",
                      flex: 1,
                      backgroundColor: "#fff"
                      }}
                  >
                      <Icon.FiChevronDown color="#dcdcdc" size={29} /> 
                  </div>
              }
              borderColor="#dcdcdc"
              borderRadius={20}
              style={{ overflow: "hidden" ,border : "none", marginLeft: "5px" ,transition: "1000ms"}}
              size={30}
          />
        </div>
      </div>
      {toggleShowlist()}
    </div>
  );
}

export default App;