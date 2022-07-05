import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header, Card, Button } from '..';

import { cardApi } from '../mokApi';

import './home.scss';

export const Home = () => {
  const [openAva, setOpenAva] = useState(false);
  const itemsPrice = useSelector((state: { cardItem: any }) => state.cardItem);

  return (
    <div className="home" onClick={() => setOpenAva(false)}>
      <div className="container">
        <Header openAva={openAva} setOpenAva={setOpenAva} />
        <h1 className="home__title text-center">Choose the product you want to build!</h1>
        <div className="home__content">
          <div className="row">
            {cardApi.map((cards) => (
              <div key={cards.id} className="col-md-4 col-sm-6 col-12">
                <Card id={cards.id} name={cards.name} image={cards.image} price={cards.price} />
              </div>
            ))}
          </div>
          {itemsPrice ? <Button className="card__btn">Pay {itemsPrice}</Button> : null}
        </div>
      </div>
    </div>
  );
};
