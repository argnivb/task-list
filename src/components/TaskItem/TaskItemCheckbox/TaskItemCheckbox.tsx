import { useId } from 'react';
import './TaskItemCheckbox.css';

const TaskItemCheckbox = ({
  label,
  value,
  onClick,
}: {
  label: JSX.Element;
  value: string;
  onClick: () => void;
}) => {
  const id = useId();

  return (
    <div className="flex items-center mt-4">
      <input
        className="task-item-checkbox"
        type="checkbox"
        value={value}
        id={id}
        onClick={onClick}
      />
      <label className="inline text-gray-800" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default TaskItemCheckbox;
