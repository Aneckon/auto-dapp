import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCard } from '../../redux/reducer/cardReducer';

import './card.scss';

interface cardProps {
  id: number;
  name: string;
  price: string;
  image: string;
}

export const Card: FC<cardProps> = ({ name, price, image, id }) => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(setCard(price));
  };

  return (
    <div onClick={handleClick} className="cardItem">
      <img src={image} alt="" />
      <h4>{name}</h4>
      <p>({price})</p>
    </div>
  );
};
