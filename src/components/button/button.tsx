import React, { FC } from 'react';

import './button.scss';

interface buttonProps {
  children: any;
  className: string;
}

export const Button: FC<buttonProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
