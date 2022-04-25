import React,{useState} from "react";
import Form from "./form";
import Todo from "./todo";

function TodoList() {
    const [todos,setTodos]=useState([]);
    const addTodo=todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        console.log(todo)
        const newTodos=[todo, ...todos]
        setTodos(newTodos)
        console.log('rrrrrr',...todos);
    }
    const completeTodo=(id)=>{
        let updateTodos=todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete=!todo.isComplete
            }
            return todo
        })
        setTodos(updateTodos)

    }
    const updateTodo =(todoId, newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev=>prev.map(item=>(item.id === todoId ? newValue : item)))
    }
    const removeTodo= id =>{
        let afterDelete = todos.filter(value => value.id != id)
        console.log(afterDelete)
        setTodos(afterDelete)
    }
  return (
  <div className=''>
  <h1> what's the plans for today </h1>
   <Form onSubmit={addTodo} />
   <Todo
   todos={todos}
   completeTodo={completeTodo} 
   removeTodo={removeTodo}
   updateTodo={updateTodo}
   />
  </div>
  
  );
}

export default TodoList;