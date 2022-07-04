import React, { useState } from 'react';

import { Header, Card, Button } from '..';

import { cardApi } from '../mokApi';

import './home.scss';

export const Home = () => {
  const [openAva, setOpenAva] = useState(false);

  return (
    <div className="home" onClick={() => setOpenAva(false)}>
      <div className="container">
        <Header openAva={openAva} setOpenAva={setOpenAva} />
        <h1 className="home__title text-center">Choose the product you want to build!</h1>
        <div className="home__content">
          <div className="row">
            {cardApi.map((cards) => (
              <div className="col-4">
                <Card key={cards.id} name={cards.name} image={cards.image} price={cards.price} />
              </div>
            ))}
          </div>
          <Button className="card__btn">Pay 0.2 BNB</Button>
        </div>
      </div>
    </div>
  );
};
