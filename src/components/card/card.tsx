import React, { FC } from 'react';

import './card.scss';

interface cardProps {
  name: string;
  price: string;
  image: string;
}

export const Card: FC<cardProps> = ({ name, price, image }) => {
  return <div className="card">
    <img src={image} alt="" />
    <h4>{name}</h4>
    <p>{price}</p>
  </div>;
};
