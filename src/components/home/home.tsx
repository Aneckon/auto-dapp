import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Header, Card, Button } from '..';

import { cardApi } from '../mokApi';
import { ConnectButton } from '../walletHooks/component/ButtonConnect/connectButton';

import './home.scss';

const RPC = {
  1: 'https://mainnet.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
  3: 'https://ropsten.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
  4: 'https://rinkeby.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
  5: 'https://goerly.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
  42: 'https://kovan.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
};

export const Home = () => {
  const [openAva, setOpenAva] = useState(false);
  const itemsPrice = useSelector((state: { cardItem: any }) => state.cardItem);

  return (
    <div className="home" onClick={() => setOpenAva(false)}>
      <ConnectButton RPC={RPC} portisId={'portisId-key-project'} />
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
