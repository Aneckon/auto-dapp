import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { setCard } from '../../redux/reducer/cardReducer';

import './card.scss';

interface cardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  active: boolean;
  setActiveBtn: (active: any) => void;
  activeCard: null;
  setActiveCard: (name: any) => void;
}

export const Card: FC<cardProps> = ({
  name,
  price,
  image,
  id,
  active,
  setActiveBtn,
  setActiveCard,
  activeCard,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCard(price));
    setActiveBtn(active);
    setActiveCard(name);
  };

  return (
    <div
      onClick={handleClick}
      className={name === activeCard ? 'cardItem cardItem__active' : 'cardItem'}>
      <img src={image} alt="" />
      <h4>{name}</h4>
      <p>({price} BNB)</p>
    </div>
  );
};
