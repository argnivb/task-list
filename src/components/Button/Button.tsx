import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import './Button.css';

type ButtonProps = Pick<
  ButtonHTMLAttributes<object>,
  'className' | 'onClick' | 'children' | 'disabled'
> & {
  type?: 'primary' | 'secundary' | 'outline';
};

export default function Button({ className, type = 'primary', ...rest }: ButtonProps) {
  return <button className={clsx(`btn btn-${type}`, className)} {...rest} />;
}
