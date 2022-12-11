import { HTMLAttributes } from 'react';
import clsx from 'clsx';

type BadgeProps = Pick<HTMLAttributes<object>, 'className' | 'children'>;

const Badge = ({ className, ...rest }: BadgeProps) => (
  <span
    className={clsx(
      'text-[14px] py-[3px] px-2 leading-[22px] font-[500] text-center whitespace-nowrap align-baseline rounded-full',
      className
    )}
    {...rest}
  />
);

export default Badge;
