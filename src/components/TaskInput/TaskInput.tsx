import { ChangeEvent, useEffect, useMemo, useRef } from 'react';
import { ReactComponent as PlusSquare } from '../../assets/plus-square.svg';
import { Avatar } from '../Avatar/Avatar';
import clsx from 'clsx';

const TaskInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  const memorizedValue = useMemo(() => !!value, [value]);
  const textArea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textArea.current) {
      textArea.current.setSelectionRange(value.length, value.length);
      textArea.current.focus();
    }
  }, [value.length]);

  return (
    <div className="relative flex flex-col">
      <PlusSquare className="absolute left-4 top-[10px] stroke-primary" />
      <Avatar
        img="https://mdbcdn.b-cdn.net/img/new/avatars/22.webp"
        className={clsx('absolute right-2 top-[10px] w-6', !memorizedValue && 'opacity-50')}
      />
      <textarea
        ref={textArea}
        className="w-full resize-none pl-[53px] py-2 pr-2 border h-[60px] rounded-t z-auto"
        placeholder="Type to add new Task"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TaskInput;
