// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactTextFormat from 'react-text-format';
import { replacer, terms } from './utils';
import TaskItemCheckbox from './TaskItemCheckbox/TaskItemCheckbox';
import EmailDecorator from './decorators/EmailDecorator';
import LinkDecorator from './decorators/LinkDecorator';
import TermDecorator from './decorators/TermDecorator';

const globalRegex = new RegExp(/\B(#|@)(\w+\b)(?!\.)/, 'g');

const TaskItem = ({ message, onEdit }: { message: string; onEdit: () => void }) => {
  return (
    <TaskItemCheckbox
      value={message}
      onClick={onEdit}
      label={
        <ReactTextFormat
          allowedFormats={['URL', 'Email', 'Term']}
          emailDecorator={EmailDecorator}
          linkDecorator={LinkDecorator}
          termDecorator={TermDecorator}
          terms={[terms.hashTag.regExp, terms.userTag.regExp]}
          linkTarget="_blank"
        >
          {message.replaceAll(globalRegex, replacer)}
        </ReactTextFormat>
      }
    />
  );
};

export default TaskItem;
