import { ReactComponent as PlusSquare } from '../../assets/plus-square.svg';
import ButtonBar from '../ButtonBar/ButtonBar';
import { ChangeEvent, useCallback, useState } from 'react';
import TaskInput from '../TaskInput/TaskInput';
import TaskItem from '../TaskItem/TaskItem';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  message: string;
}

const TaskContainer = () => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task>();

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setMessage('');
    setIsEditing(false);
    setSelectedTask(undefined);
  }, []);

  const handleSave = useCallback(() => {
    if (!message) {
      return handleClose();
    }
    setTasks((tasks) => [...tasks, { id: uuidv4(), message }]);
    handleClose();
  }, [handleClose, message]);

  const handleUpdate = useCallback(() => {
    if (!message) {
      return handleClose();
    }

    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === selectedTask?.id) {
          return {
            ...task,
            message,
          };
        }
        return task;
      })
    );

    handleClose();
  }, [handleClose, message, selectedTask?.id]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value),
    []
  );

  const handleEdit = useCallback(
    (task: Task) => {
      setMessage(task.message);
      setSelectedTask(task);
      setIsEditing(true);
      handleOpen();
    },
    [handleOpen]
  );

  if (!open) {
    return (
      <>
        <button onClick={handleOpen} className="flex cursor-auto">
          <PlusSquare className="mr-[14px] stroke-primary" />
          Type to add new Task
        </button>
        {tasks.map((task) => (
          <TaskItem key={task.id} message={task.message} onEdit={() => handleEdit(task)} />
        ))}
      </>
    );
  }

  return (
    <>
      <div className="shadow-lg rounded">
        <TaskInput value={message} onChange={handleChange} />
        <ButtonBar
          onCancel={handleClose}
          onSave={handleSave}
          onUpdate={handleUpdate}
          disabled={!message}
          isEditing={isEditing}
        />
      </div>
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} message={task.message} onEdit={() => handleEdit(task)} />
        ))}
      </div>
    </>
  );
};

export default TaskContainer;
