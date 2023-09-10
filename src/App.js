import { useEffect, useState } from 'react';
import './App.css';
import { Crear } from './components/Crear';
import { Listado } from './components/Listado';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const lista = JSON.parse(localStorage.getItem("todo"));

    if (!lista) {
      setTodoList([]);
    } else {
      setTodoList(lista);
    }
  }, []);

  return (
    <div className='layout'>
      <div className='content'>
        <h1 className='title'>Get Things Done!</h1>
        {/* FORMULARIO PARA CREAR TODO */}
        <Crear todoList={todoList} setTodoList={setTodoList} />

        {/*Lista de TODOS*/}
        <div className='todo-list'>

          <Listado
            todoList={todoList}
            setTodoList={setTodoList}
          />

        </div>

      </div>

    </div>
  );
}

export default App;
