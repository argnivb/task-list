import Badge from '../../Badge/Badge';
import { ReactComponent as Mail } from '../../../assets/mail.svg';

const EmailDecorator = (decoratedHref: string) => {
  return (
    <a href={decoratedHref} className="customEmail">
      <Badge className="bg-[#FFE6C7] text-[#F58E0A]">
        <Mail className="w-[14px] h-[14px] mr-1 mb-[1px] inline-block" /> Mail
      </Badge>
    </a>
  );
};

export default EmailDecorator;
