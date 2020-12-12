import React, { useState } from 'react'
import { 
  FormControl, 
  InputLabel, 
  Input, 
  Button 
} from '@material-ui/core'
import './App.css';

function App() {

  const [todos, setTodos] = useState(["First task", "second task"]);
  const [input, setInput] = useState('')

  const addTodo = (event) => {
    // Prevent default behaviour of a form (Prevent page refresh)
    event.preventDefault();

    // Add current value of input as a new todo
    setTodos([...todos, input]);

    // Clear up input field after submit
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Coders!</h1>
      
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange = {(event) => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
          Add Todo
        </Button>

        <ul>
          {
            todos.map(todo => 
              <li key={todo}>{todo}</li>
            )
          }
        </ul>
      </form>
    </div>
  );
}

export default App;
