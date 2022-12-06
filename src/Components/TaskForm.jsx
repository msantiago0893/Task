import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../slices/task/taskSlice';
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom';

function TaskForm() {

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.task);

  useEffect(() => {
    if (params.id) {
      setTask(
        tasks.find(task => task.id === params.id)
      )
    }
  }, [params, tasks]);

  const handleSubmit = e => {
    e.preventDefault(); // se evita que se refresque la pagina

    if (params.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask({
        ...task,
        id: uuid()
      }));
    }

    navigate('/');
  };

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='bg-zinc-800 max-w-sm p-4'>
      <h1 className='block text-xl font-bold mb-6 text-center'> {params.id ? 'Editar' : 'Agregar'} </h1>

      <label htmlFor='title' className='block text-xs font-bold mb-2'>Task: </label>
      <input
        name='title'
        type="text"
        placeholder='title'
        onChange={handleChange}
        value={task.title}
        className='w-full p-2 rounded-ms bg-zinc-600 mb-2' />

      <label htmlFor='description' className='block text-xs font-bold mb-2'>Description: </label>
      <textarea
        name='description'
        onChange={handleChange}
        value={task.description}
        className='w-full p-2 rounded-ms bg-zinc-600 mb-2'></textarea>

      <button className='bg-indigo-600 px-2 py-1'> Guardar </button>
    </form>
  )
}

export default TaskForm