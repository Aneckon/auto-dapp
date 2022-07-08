// @ts-nocheck

import './home.scss';

import { Button, Card, Header, Warning } from '..';
import React, { useEffect, useState } from 'react';
import { bnbAxios, croAxios } from '../axios';

import { cardApi } from '../mokApi';
import { useBtnConnect } from '../walletHooks/component/hooks/useBtnConnect';
import { useSelector } from 'react-redux';
import { useSendTransaction } from '../walletHooks/component/hooks/useSendTransaction';
import { useWeb3React } from '@web3-react/core';

export const Home = () => {
  const { balance, account } = useBtnConnect();
  const setTransaction = useSendTransaction();
  const { chainId } = useWeb3React();

  const [openAva, setOpenAva] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);

  const [activeCard, setActiveCard] = useState(null);

  const itemsPrice = useSelector((state: { cardItem: any }) => state.cardItem);
  const [payBalance, setPayBalance] = useState(false);
  const [payBalanceBtn, setPayBalanceBtn] = useState(false);
  const [activeBalanceBtn, setActiveBalanceBtn] = useState(false);
  const [transactionBtn, setTransactionBtn] = useState(false);

  const [payBnb, setPayBnb] = useState([]);
  const [payCro, setPayCro] = useState([]);

  const transaction = (price: number) => {
    setTransactionBtn(!transactionBtn);
    if (account) {
      if (balance < price * 10 ** 18) {
        setPayBalance(false);
      } else {
        setTransaction.setTransaction(price);
        setPayBalanceBtn(!payBalanceBtn);
        setPayBalance(!payBalance);
      }
    } else {
      setActiveBalanceBtn(!activeBalanceBtn);
    }
  };

  useEffect(() => {
    croAxios({ setPayCro });
    bnbAxios({ setPayBnb });
  }, [setPayCro, setPayBnb]);

  const priceCro = itemsPrice / Number(payCro);

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
            chainId && [338, 25].includes(chainId) ? (
              itemsPrice ? (
                <Button
                  click={activeBtn ? () => transaction(priceCro.toFixed(5)) : () => ''}
                  className={activeBtn ? 'card__btn' : 'card__btn card__btn-none'}>
                  {activeBtn ? `Pay ${priceCro.toFixed(5)} CRO` : 'Coming Soon!'}
                </Button>
              ) : null
            ) : chainId && [56, 97].includes(chainId) ? (
              itemsPrice ? (
                <Button
                  click={activeBtn ? () => transaction(itemsPrice) : () => ''}
                  className={activeBtn ? 'card__btn' : 'card__btn card__btn-none'}>
                  {activeBtn ? `Pay ${itemsPrice} BNB` : 'Coming Soon!'}
                </Button>
              ) : null
            ) : null
          ) : itemsPrice ? (
            <Button
              click={activeBtn ? () => transaction(payBnb) : () => ''}
              className={activeBtn ? 'card__btn' : 'card__btn card__btn-none'}>
              {activeBtn ? `Pay ${itemsPrice} BNB` : 'Coming Soon!'}
            </Button>
          ) : null}
        </div>
      </div>
      <Warning
        payBalance={payBalance}
        payBalanceBtn={payBalanceBtn}
        activeBalanceBtn={activeBalanceBtn}
        transactionBtn={transactionBtn}
      />
    </div>
  );
};
