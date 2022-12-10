import clsx from 'clsx';

export function Avatar({ img, className, ...rest }: { img: string; className?: string }) {
  return (
    <img
      src={img}
      className={clsx('rounded-full data-[disabled=true]:opacity-50', className)}
      alt="Avatar"
      {...rest}
    />
  );
}
