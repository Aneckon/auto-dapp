import React, { FC } from 'react';
import { useBtnConnect } from '../walletHooks/component/hooks/useBtnConnect';

interface warningProps {
  payBalance: boolean;
  payBalanceBtn: boolean;
  activeBalanceBtn: boolean;
}

export const Warning: FC<warningProps> = ({ payBalance, payBalanceBtn, activeBalanceBtn }) => {
  const { account, chain } = useBtnConnect();

  console.log(chain);

  return (
    <>
      {account ? (
        chain ? null : (
          <div
            className={
              payBalanceBtn ? 'warning red warning__pay warning__redactive' : 'warning red'
            }>
            <div className="warning__image"></div>
            <div className="warning__content">
              <h4>Please Choose BSC or CRO network!</h4>
            </div>
          </div>
        )
      ) : (
        <div className={activeBalanceBtn ? 'warning red warning__redactive' : 'warning red'}>
          <div className="warning__image"></div>
          <div className="warning__content">
            <h4>Please Choose network!</h4>
          </div>
        </div>
      )}
      {/* {account ? (
        chain ? (
          payBalance ? (
            <div
              className={
                payBalanceBtn ? 'warning warning__pay warning__active' : 'warning warning__pay'
              }>
              <div className="warning__image"></div>
              <div className="warning__content">
                <h4>Payment Success</h4>
              </div>
            </div>
          ) : (
            <div
              className={
                payBalanceBtn
                  ? 'warning red warning__pay warning__redactive'
                  : 'warning red warning__pay'
              }>
              <div className="warning__image"></div>
              <div className="warning__content">
                <h4>Insufficient Balance</h4>
              </div>
            </div>
          )
        ) : (
          <div
            className={
              payBalanceBtn ? 'warning red warning__pay warning__redactive' : 'warning red'
            }>
            <div className="warning__image"></div>
            <div className="warning__content">
              <h4>Please Choose BSC or CRO network!</h4>
            </div>
          </div>
        )
      ) : activeBalanceBtn ? (
        <div className={activeBalanceBtn ? 'warning red warning__redactive' : 'warning red'}>
          <div className="warning__image"></div>
          <div className="warning__content">
            <h4>Please Choose network!</h4>
          </div>
        </div>
      ) : null} */}
    </>
  );
};
