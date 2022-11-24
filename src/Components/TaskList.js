import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/task/taskSlice';

function TaskList() {
  const tasks = useSelector(state => state.task);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <div>
      {
        tasks.map(task => (
          <div key = {task.id}>
            <h3> { task.title } </h3>
            <p> { task.description } </p>
            <button onClick={() => handleDelete(task.id)}> Eliminar </button>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList