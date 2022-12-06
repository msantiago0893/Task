import ReactDOM from 'react-dom';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask } from '../slices/task/taskSlice';
import Modal from './Modal/Modal';


function TaskList() {
  const [isOpen, setIsOpen] = useState(false);
  const [itemDelete, setItemDelete] = useState(null);

  const tasks = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const deleteItem = (id) => {
    setItemDelete(id);
    setIsOpen(true);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(itemDelete));
  };

  return (
    <div className='w-4/6'>
      <header className='fles justify-between items-center py-4'>
        <h1> Task {tasks.length} </h1>
        <Link to='/create-task' className='bg-indigo-600 px-2 py-1 rounded-md-sm text-sm'> Crear tarea </Link>
      </header>

      <div className='grid grid-cols-3 gap-4'>
        {
          tasks.map(task => (
            <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
              <header className='flex justify-between'>
                <h3> {task.title} </h3>
                <div className='flex gap-x-2'>
                  <Link to={`/edit-task/${task.id}`}
                    className='bg-zinc-600 px-2 py-1 text-xs rounded-md'> Editar </Link>
                  <button onClick={() => deleteItem(task.id)}
                    className='bg-red-500 px-2 py-1 text-xs rounded-md'> Eliminar </button>
                </div>
              </header>
              <p> {task.description} </p>
            </div>
          ))
        }
      </div>

      {isOpen && ReactDOM.createPortal(
        <Modal setIsOpen={setIsOpen} handleDeleteTask={handleDeleteTask}>
          <h1>¿Desea eliminar el elemento?</h1>
        </Modal>,
        document.getElementById('modal')
      )}

      {/* {
      isOpen &&
        <Modal setIsOpen = {setIsOpen} handleDeleteTask = {handleDeleteTask}>
          <h1>¿Desea eliminar el elemento?</h1>
        </Modal>
      } */}

    </div>
  )
}

export default TaskList