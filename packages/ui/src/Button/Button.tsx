import type { ButtonHTMLAttributes, FC } from 'react';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  

  return (
    <button {...props}>
      {children}
    </button>
  );
};
