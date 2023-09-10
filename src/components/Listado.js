import React from 'react';


export const Listado = ({todoList,setTodoList}) => {

  const deleteTodo = (e, todo) => {
    const lista = todoList;

    const nuevaLista = lista.filter(item => item.title !== todo);

    setTodoList(nuevaLista);
  }


  return (
    <>
      {
        todoList.map(todo => {
          return (
            <div key={todo.id} className='todo' >
              <p>{todo.title}</p>  
              <input 
                type='button' 
                value="X" 
                className='delete'
                onClick={e => {deleteTodo(e, todo.title)}}
              />
              <input type='button' value="Edit" className='edit'/>
            </div>
          )
        })
      }
    </>
  )
}
