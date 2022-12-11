import Badge from '../../Badge/Badge';
import { ReactComponent as Link } from '../../../assets/link.svg';

const LinkDecorator = (decoratedHref: string, decoratedText: string, linkTarget: string) => {
  return (
    <a href={decoratedHref} target={linkTarget} rel="noopener">
      <Badge className="bg-[#D6EBFF] text-[#007FFF]">
        <Link className="w-[14px] h-[14px] mr-1 mb-[1px] inline-block" /> Link
      </Badge>
    </a>
  );
};

export default LinkDecorator;
