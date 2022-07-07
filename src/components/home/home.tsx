import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useBtnConnect } from '../walletHooks/component/hooks/useBtnConnect';

import { Header, Card, Button, Warning } from '..';

import { cardApi } from '../mokApi';
import { bnbAxios, croAxios } from '../axios';

import './home.scss';
import { useWeb3React } from '@web3-react/core';

export const Home = () => {
  const { balance, account, chain } = useBtnConnect();
  const { chainId } = useWeb3React();

  const [openAva, setOpenAva] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);

  const [activeCard, setActiveCard] = useState(null);

  const itemsPrice = useSelector((state: { cardItem: any }) => state.cardItem);
  const [payBalance, setPayBalance] = useState(false);
  const [payBalanceBtn, setPayBalanceBtn] = useState(false);
  const [activeBalanceBtn, setActiveBalanceBtn] = useState(false);

  const [payBnb, setPayBnb] = useState([]);
  const [payCro, setPayCro] = useState([]);

  useEffect(() => {
    if (payBalanceBtn) {
      if (balance !== '0') {
        setPayBalance(true);
      } else {
        setPayBalance(false);
      }
    }
  }, [payBalanceBtn, balance, itemsPrice]);

  useEffect(() => {
    croAxios({ setPayCro });
    bnbAxios({ setPayBnb });
  }, [setPayCro, setPayBnb]);

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
            chain && chainId === 338 ? (
              itemsPrice ? (
                <Button
                  click={
                    account
                      ? () => setPayBalanceBtn(!payBalanceBtn)
                      : () => setActiveBalanceBtn(!activeBalanceBtn)
                  }
                  className="card__btn">
                  {activeBtn ? `Pay ${payCro} CRO` : 'Comming Soon!'}
                </Button>
              ) : null
            ) : itemsPrice ? (
              <Button
                click={
                  account
                    ? () => setPayBalanceBtn(!payBalanceBtn)
                    : () => setActiveBalanceBtn(!activeBalanceBtn)
                }
                className={activeBtn ? 'card__btn' : 'card__btn card__btn-none'}>
                {activeBtn ? `Pay ${payBnb} BNB` : 'Comming Soon!'}
              </Button>
            ) : (
              <Button
                click={
                  account
                    ? () => setPayBalanceBtn(!payBalanceBtn)
                    : () => setActiveBalanceBtn(!activeBalanceBtn)
                }
                className="card__btn">
                {activeBtn ? `Pay ${payBnb} BNB` : 'Comming Soon!'}
              </Button>
            )
          ) : itemsPrice ? (
            <Button
              click={
                account
                  ? () => setPayBalanceBtn(!payBalanceBtn)
                  : () => setActiveBalanceBtn(!activeBalanceBtn)
              }
              className={activeBtn ? 'card__btn' : 'card__btn card__btn-none'}>
              {activeBtn ? `Pay ${payBnb} BNB` : 'Comming Soon!'}
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
