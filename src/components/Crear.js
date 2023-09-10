import React, { useState } from 'react';
import { GuardarEnStorage } from '../helpers/guardarEnStorage';

export const Crear = ({todoList,setTodoList}) => {

  const [input, setInput] = useState("");

  const [error, setError] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  
    // Utiliza una función de devolución de llamada para ver el valor actualizado
    setInput(prevInput => {
      
      return prevInput;
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim() ===''){
      setError("Please enter a todo!");
      return;
    }

    let todo = {
      id: new Date().getTime(),
      title: input
    }

    setError('');

    setTodoList((elementos) => {
      elementos = elementos || []; // Initialize as an empty array if null or undefined
      return [...elementos, todo];
    });

    GuardarEnStorage("todo", todo);

    setInput("");
  }

  return (
    
    <form className='input' onSubmit={handleSubmit}>
      <h2 className='error'>{error}</h2>
        <input type='text'
               onChange={handleChange}
               name='todo'
               value={input}
               placeholder='What are you going to do?'>
        </input>

        <input type='submit'></input>
    </form>
  )
}

