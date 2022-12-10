import { useId } from 'react';

const TaskItem = ({ message, onEdit }: { message: string; onEdit: () => void }) => {
  const id = useId();
  return (
    <div className="flex items-center mt-4">
      <input
        className="form-check-input appearance-none h-[24px] w-[24px] border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mr-3 bg-no-repeat bg-center bg-contain cursor-pointer"
        type="checkbox"
        value={message}
        id={id}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\")",
        }}
        onClick={onEdit}
      />
      <label className="form-check-label inline-block text-gray-800" htmlFor={id}>
        {message}
      </label>
    </div>
  );
};

export default TaskItem;
