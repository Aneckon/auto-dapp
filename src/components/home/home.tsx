import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useBtnConnect } from '../walletHooks/component/hooks/useBtnConnect';

import { Header, Card, Button, Warning } from '..';

import { cardApi } from '../mokApi';

import './home.scss';

export const Home = () => {
  const { balance, account, chain } = useBtnConnect();

  const [openAva, setOpenAva] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);

  const [activeCard, setActiveCard] = useState(null);

  const itemsPrice = useSelector((state: { cardItem: any }) => state.cardItem);
  const [payBalance, setPayBalance] = useState(false);
  const [payBalanceBtn, setPayBalanceBtn] = useState(false);
  const [activeBalanceBtn, setActiveBalanceBtn] = useState(false);

  useEffect(() => {
    if (payBalanceBtn) {
      if (balance === itemsPrice) {
        setPayBalance(true);
      } else {
        setPayBalance(false);
      }
    }
    console.log(payBalance);
  }, [payBalanceBtn, balance, itemsPrice]);

  return (
    <div className="home" onClick={() => setOpenAva(false)}>
      <div className="container">
        <Header openAva={openAva} setOpenAva={setOpenAva} />
        <h1 className="home__title text-center">Choose the product you want to build!</h1>
        <div className="home__content">
          <div className="row">
            {cardApi.map((cards) => (
              <div key={cards.id} className="col-md-4 col-sm-6 col-12">
                <Card
                  id={cards.id}
                  name={cards.name}
                  image={cards.image}
                  price={cards.price}
                  active={cards.active}
                  setActiveBtn={setActiveBtn}
                  setActiveCard={setActiveCard}
                  activeCard={activeCard}
                />
              </div>
            ))}
          </div>
          {account ? (
            itemsPrice ? (
              <Button click={() => setPayBalanceBtn(!payBalanceBtn)} className="card__btn">
                Pay {activeBtn ? itemsPrice : 'Comming Soon!'}
              </Button>
            ) : null
          ) : itemsPrice ? (
            <Button
              click={() => setActiveBalanceBtn(!activeBalanceBtn)}
              className={activeBtn ? 'card__btn' : 'card__btn card__btn-none'}>
              {activeBtn ? `${itemsPrice} BNB` : 'Comming Soon!'}
            </Button>
          ) : null}
        </div>
      </div>
      <Warning
        payBalance={payBalance}
        payBalanceBtn={payBalanceBtn}
        activeBalanceBtn={activeBalanceBtn}
      />
    </div>
  );
};
