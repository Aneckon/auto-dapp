<<<<<<< HEAD
// @ts-nocheck

import './home.scss';

import { Button, Card, Header, Warning } from '..';
import React, { useEffect, useState } from 'react';
import { bnbAxios, croAxios } from '../axios';

=======
import './home.scss';

import { Button, Card, Header, Warning } from '..';
import React, { useEffect, useState } from 'react';
import { bnbAxios, croAxios } from '../axios';

>>>>>>> 1ef80e493e4336b199be5955999c646f73548e7a
import { cardApi } from '../mokApi';
import { useBtnConnect } from '../walletHooks/component/hooks/useBtnConnect';
import { useSelector } from 'react-redux';
import useSendTransaction from '../walletHooks/component/hooks/useSendTransaction';
import { useWeb3React } from '@web3-react/core';

export const Home = () => {
  const { balance, account, chain } = useBtnConnect();
<<<<<<< HEAD
  const setTransaction = useSendTransaction();
=======
  const setTransaction = useSendTransaction()
>>>>>>> 1ef80e493e4336b199be5955999c646f73548e7a
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

<<<<<<< HEAD
  const transaction = (price: number) => {
    if (account) {
      console.log({ balance, price });
      if (balance < price * 10 ** 18) {
        console.log('this');
        setPayBalance(false);
      } else {
        setTransaction(price);
        setPayBalanceBtn(!payBalanceBtn);
      }
    } else {
      setActiveBalanceBtn(!activeBalanceBtn);
    }
  };

=======
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
  
>>>>>>> 1ef80e493e4336b199be5955999c646f73548e7a
  useEffect(() => {
    if (payBalanceBtn) {
      if (balance !== '0') {
        setPayBalance(true);
      } else {
        setPayBalance(false);
      }
    }
  }, [payBalanceBtn, balance, itemsPrice, payBalance]);

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 1ef80e493e4336b199be5955999c646f73548e7a
              className={activeBtn ? 'card__btn' : 'card__btn card__btn-none'}>
              {activeBtn ? `Pay ${payBnb} BNB` : 'Coming Soon!'}
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
