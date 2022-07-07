import './home.scss';

import { Button, Card, Header, Warning } from '..';
import React, { useEffect, useState } from 'react';
import { bnbAxios, croAxios } from '../axios';

import { cardApi } from '../mokApi';
import { useBtnConnect } from '../walletHooks/component/hooks/useBtnConnect';
import { useSelector } from 'react-redux';
import useSendTransaction from '../walletHooks/component/hooks/useSendTransaction';
import { useWeb3React } from '@web3-react/core';

export const Home = () => {
  const { balance, account, chain } = useBtnConnect();
  const setTransaction = useSendTransaction()
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

  const transaction = () => {
    if (account) {
      console.log('1')
      setTransaction(1)
      setPayBalanceBtn(!payBalanceBtn)
    } else {
      console.log('2')
      setActiveBalanceBtn(!activeBalanceBtn)
    }
    
  }
  
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

  const priceCro = Number(payCro) / itemsPrice;

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
                  click={transaction}
                  className="card__btn">
                  {activeBtn ? `Pay ${priceCro.toFixed(5)} CRO` : 'Comming Soon!'}
                </Button>
              ) : null
            ) : itemsPrice ? (
              <Button
                click={transaction}
                className={activeBtn ? 'card__btn' : 'card__btn card__btn-none'}>
                {activeBtn ? `Pay ${itemsPrice} BNB` : 'Comming Soon!'}
              </Button>
            ) : null
          ) : itemsPrice ? (
            <Button
              click={transaction}
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
