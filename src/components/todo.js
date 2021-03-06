import React,{useState} from "react";
import Form from "./form";
import TodoList from "./todoList";
import { RiCloseCircleLine} from "react-icons/ri";
import { TiEdit} from "react-icons/ti";

function Todo({todos,completeTodo,removeTodo,updateTodo}) {
const [edit, setEdit]=useState({
    id:null,
    value:''
})
const submitUpdate = value =>{
    console.log('jjjjjjjjjjj')
    updateTodo(edit.id,value)
    setEdit({
        id:null,
        value:''
    })
}
if(edit.id){ 
    
    return <Form edit={edit} onSubmit={submitUpdate}></Form>
}
  return todos.map((todo,index)=>(
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
       key={index}> 
       <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
           {todo.text}
       </div>
       <div className="icons">
           <RiCloseCircleLine onClick={()=>removeTodo(todo.id)} className='delete_icon' />
           <TiEdit onClick={()=>setEdit({id:todo.id,value:todo.text})} className='edit_icon' />
       </div>
       </div>
  ))
}

export default Todo;