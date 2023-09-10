import React, { useState} from 'react';


export const Listado = ({todoList,setTodoList}) => {


  return (
    <>
      {
        todoList.map(todo => {
          return (
            <div key={todo.id} className='todo' >
              <p>{todo.title}</p>  
              <input type='button' value="X" className='delete'/>
              <input type='button' value="Edit" className='edit'/>
            </div>
          )
        })
      }
    </>
  )
}
