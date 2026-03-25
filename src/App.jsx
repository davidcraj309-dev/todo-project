import React, { useState } from 'react'

function App() {
const[todo,setTodo] = useState("")
const[todoList,setTodoList] = useState([])

const HandleTodo = ()=>{
  if(todo.trim()==="") return;
  setTodoList([...todoList,{id:Date.now(),text:todo,completed:false}])
  setTodo('')
}

const togggleComplete = (id)=>{
    setTodoList(
      todoList.map((item)=>
        item.id === id ? {...item, completed:!item.completed } : item
      )
    )
}
const deleteTodo = (id) =>{
  setTodoList(
    todoList.filter((item)=> item.id !== id)
  )
}

  return (
    <div  className='app-container'>
      <h1>Todo List</h1>
      <div className='input-Container'>
      <input type='text'
      placeholder='Enter Your Todo' 
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}/>
      <button className='add-btn' onClick={HandleTodo}>Add</button>
      </div>
      <ul className='todo-List'>
        {todoList.map((item)=>(
         <li key={item.id} 
         onClick={()=>togggleComplete(item.id)}
         style={{
           cursor:"pointer",
           textDecoration:item.completed? "line-through" : "none",
           color:item.completed? "gray":"black"
         }}
         >
          <span>{item.text}</span>
          <button
          className='delete-btn'
          onClick={(e)=>{
            e.stopPropagation()
            deleteTodo(item.id);
          }

          }
          >Delete</button>
         </li>
        ))}
      </ul>
    </div>
  )
}

export default App