import { terms } from '../utils';
import Badge from '../../Badge/Badge';
import { ReactComponent as Hash } from '../../../assets/hash.svg';
import { Avatar } from '../../Avatar/Avatar';

const TermDecorator = (decoratedText: string) => {
  const isHashTag = decoratedText.includes(terms.hashTag.keyWord);
  const isUserTag = decoratedText.includes(terms.userTag.keyWord);

  if (isHashTag) {
    return (
      <Badge className="bg-[#DBC7FF] text-[#702EE6]">
        <Hash className="inline-block w-[12px] h-[13px] mb-[1px]" />
        {decoratedText.substring(terms.hashTag.keyWord.length)}
      </Badge>
    );
  }

  if (isUserTag) {
    return (
      <Badge className="bg-[#ADF0D9] text-[#07A873]">
        <Avatar
          img="https://mdbcdn.b-cdn.net/img/new/avatars/20.webp"
          className="inline-block w-[20px] h-[20px] mb-[2px] mr-1 ml-[-5px]"
        />
        {decoratedText.substring(terms.userTag.keyWord.length)}
      </Badge>
    );
  }

  return decoratedText;
};

export default TermDecorator;
