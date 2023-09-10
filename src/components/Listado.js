import React, { useState } from 'react';
import { Editar } from './Editar';


export const Listado = ({todoList,setTodoList}) => {

  const [editar, setEditar] = useState(0);

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const deleteTodo = (e, todo) => {
    const lista = todoList;

    const nuevaLista = lista.filter(item => item.title !== todo);

    setTodoList(nuevaLista);
  }

  const editTodo = (e, todoId) => {
    setEditingTodoId(todoId);

    const todo = todoList.find(item => item.id === todoId);

    setEditedText(todo.title);

  }

  const saveEditedTodo = (e, todoId) => {
    const todoIndex = todoList.findIndex(item => item.id === todoId);

    if(todoIndex !== 1) {
      const nuevaLista = [...todoList];

      nuevaLista[todoIndex].title = editedText;

      setTodoList(nuevaLista);

      setEditingTodoId(null);
      setEditedText('');
    }
  }


  return (
    <>
      {
        todoList.map(todo => {
          return (
            <div key={todo.id} className='todo'>
              {editingTodoId === todo.id ? (
                // Si estamos editando, muestra el input
                <input
                  className='on-editing'
                  type="text"
                  value={todo.title}
                  onChange={(e) => {
                    const nuevaLista = todoList.map(item => {
                      if (item.id === todo.id) {
                        return { ...item, title: e.target.value };
                      }
                      return item;
                    });
                    setTodoList(nuevaLista);
                  }}
                />

              ) : (
                // Si no estamos editando, muestra el texto
                <p>{todo.title}</p>
              )}


              <input
                type='button'
                value="X"
                className='delete'
                onClick={(e) => deleteTodo(e, todo.title)}
              />
              {editingTodoId === todo.id ? (
                // Si estamos editando, muestra el botón de guardar
                <input
                  type='button'
                  value="Guardar"
                  className='edit'
                  onClick={() => setEditingTodoId(null)}
                />
              ) : (
                // Si no estamos editando, muestra el botón de editar
                <input
                  type='button'
                  value="Editar"
                  className='edit'
                  onClick={() => editTodo(null, todo.id)}
                />
              )}
            </div>
          )
        })
      }
    </>
  )
}