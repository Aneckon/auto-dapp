import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCard } from '../../redux/reducer/cardReducer';
import { cardApi } from '../mokApi';

import './card.scss';

interface cardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  active: boolean;
  setActiveBtn: any;
  activeClass: boolean;
}

export const Card: FC<cardProps> = ({
  name,
  price,
  image,
  id,
  active,
  setActiveBtn,
  activeClass,
}) => {
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = useState(false);

  const handleClick = () => {
    dispatch(setCard(price));
    setActiveBtn(active);
    setActiveCard(true);
    cardApi.map((item) => (item.id === id ? {...item, activeClass: true } : item));
  };

  return (
    <div onClick={handleClick} className={activeCard ? 'cardItem cardItem__active' : 'cardItem'}>
      <img src={image} alt="" />
      <h4>{name}</h4>
      <p>({price})</p>
    </div>
  );
};
