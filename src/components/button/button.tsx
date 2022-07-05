import React, { FC } from 'react';

import './button.scss';

interface buttonProps {
  children: any;
  className: string;
  click?: () => void;
}

export const Button: FC<buttonProps> = ({ children, className, click }) => {
  return (
    <div onClick={click} className={className}>
      {children}
    </div>
  );
};
