import Button from '../Button/Button';
import { ReactComponent as Maximize } from '../../assets/maximize-2.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { ReactComponent as Unlock } from '../../assets/unlock.svg';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Circle } from '../../assets/circle.svg';

export const ButtonBar = () => {
  return (
    <div className="p-2 border flex justify-between rounded-b bg-[#FAFBFB]">
      <div className="flex">
        <Button type="secundary">
          <Maximize className="w-[20px] h-[20px] mr-3 ml-[-8px]" /> open
        </Button>
        <Button type="outline" className="ml-8">
          <Calendar className="w-[20px] h-[22px] mr-3 ml-[-8px]" /> today
        </Button>
        <Button type="outline" className="ml-1">
          <Unlock className="w-[20px] h-[22px] mr-3 ml-[-8px]" /> public
        </Button>
        <Button type="outline" className="ml-1">
          <Sun className="w-[22px] h-[22px] mr-3 ml-[-8px]" /> highlight
        </Button>
        <Button type="outline" className="ml-1">
          <span className="flex items-center justify-center relative mr-5 ml-[-4px]">
            <Circle className="absolute" /> 0
          </span>
          estimation
        </Button>
      </div>
      <div className="flex">
        <Button type="secundary">cancel</Button>
        <Button className="ml-1">ok</Button>
      </div>
    </div>
  );
};
