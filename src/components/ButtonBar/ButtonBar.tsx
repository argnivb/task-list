import Button from '../Button/Button';
import { ReactComponent as Maximize } from '../../assets/maximize-2.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { ReactComponent as Unlock } from '../../assets/unlock.svg';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Circle } from '../../assets/circle.svg';
import { ReactComponent as Close } from '../../assets/x.svg';

export const ButtonBar = () => {
  return (
    <div className="p-2 border flex justify-between rounded-b bg-[#FAFBFB]">
      <div className="flex">
        <Button type="secundary">
          <Maximize className="w-[20px] h-[20px] lg:mr-3 lg:ml-[-8px]" />
          <span className="hidden lg:inline">open</span>
        </Button>
        <Button type="outline" className="ml-8">
          <Calendar className="w-[20px] h-[22px] lg:mr-3 lg:ml-[-8px]" />
          <span className="hidden lg:inline">today</span>
        </Button>
        <Button type="outline" className="ml-1">
          <Unlock className="w-[20px] h-[22px] lg:mr-3 lg:ml-[-8px]" />
          <span className="hidden lg:inline">public</span>
        </Button>
        <Button type="outline" className="ml-1">
          <Sun className="w-[22px] h-[22px] lg:mr-3 lg:ml-[-8px]" />
          <span className="hidden lg:inline">highlight</span>
        </Button>
        <Button type="outline" className="ml-1">
          <span className="flex items-center justify-center relative lg:mr-5 lg:ml-[-4px]">
            <Circle className="absolute" /> 0
          </span>
          <span className="hidden lg:inline">estimation</span>
        </Button>
      </div>
      <div className="flex">
        <Button type="secundary" className="max-lg:!hidden">
          cancel
        </Button>
        <Button className="ml-1 max-lg:!hidden">ok</Button>
        <Button className="ml-1 lg:!hidden">
          <Close className="w-[24px] h-[24px]" />
        </Button>
      </div>
    </div>
  );
};
