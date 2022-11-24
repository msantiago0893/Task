import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/task/taskSlice';
import { v4 as uuid } from 'uuid'

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault(); // se evita que se refresque la pagina
    dispatch(addTask({
      ...task,
      id: uuid()
    }));
  };

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder='title' onChange={handleChange}/>
      <textarea name='description' onChange={handleChange}></textarea>

      <button> Guardar </button>
    </form>
  )
}

export default TaskForm