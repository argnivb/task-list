import { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="bg-teal-600 text-white px-4 py-2" onClick={onClick}>
      {children}
    </button>
  );
}
