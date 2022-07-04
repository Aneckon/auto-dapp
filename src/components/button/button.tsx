import React, { FC } from 'react';

import './button.scss';

interface buttonProps {
  children: string;
  className: string;
}

export const Button: FC<buttonProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
