import './App.css';

function App() {
  return (
    <div className='layout'>

      <div className='content'>
        <div className='input'>
          <input type='text' name='todo-name' placeholder='What are you going to do?'></input>
          <input type='submit' value="Create"></input>
        </div>

        <div className='todo-list'>

          <div className='todo'>
            <p>Hacer mi tarea</p>
            <input type='button' value="X" className='delete'/>
            <input type='button' value="Edit"/>
          </div>

          <div className='todo'>
            <p>Hacer mi tarea</p>
            <input type='button' value="X" className='delete'/>
            <input type='button' value="Edit"/>
          </div>

          <div className='todo'>
            <p>Hacer mi tarea</p>
            <input type='button' value="X" className='delete'/>
            <input type='button' value="Edit"/>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
