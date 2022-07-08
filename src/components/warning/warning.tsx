import { useWeb3React } from '@web3-react/core';
import React, { FC, useEffect, useState } from 'react';
import Web3 from 'web3';
import { toast, ToastContainer } from 'react-toastify';
import { useBtnConnect } from '../walletHooks/component/hooks/useBtnConnect';
import { useSendTransaction } from '../walletHooks/component/hooks/useSendTransaction';

interface warningProps {
  payBalance: boolean;
  payBalanceBtn: boolean;
  activeBalanceBtn: boolean;
  transactionBtn: boolean;
}

export const Warning: FC<warningProps> = ({
  payBalance,
  payBalanceBtn,
  activeBalanceBtn,
  transactionBtn,
}) => {
  const { chainId } = useWeb3React();
  const { account, chain } = useBtnConnect();

  useEffect(() => {
    if (account) {
      if (!chain) {
        if (chainId === 338 || chainId === 25 || chainId === 56 || chainId === 97) {
          toast.success(`Connected to 
        ${
          chainId === 338 || chainId === 25
            ? ' CRO Network'
            : chainId === 56 || chainId === 97
            ? ' BSC Network'
            : ''
        }`);
        } else {
          toast.error('Please Choose BSC or CRO network!');
        }
      }
      if (!activeBalanceBtn) {
        if (transactionBtn) {
          if (payBalance === true) {
            if (payBalanceBtn === true) {
              toast.success('Payment Success');
            } else {
              toast.error('Insufficient Balance');
            }
          } else {
            toast.error('Insufficient Balance');
          }
        }
      }
    } else {
      if (activeBalanceBtn) {
        toast.error('Please Choose network!');
      }
    }
  }, [account, chainId, payBalanceBtn, payBalance, activeBalanceBtn, transactionBtn, chain]);

  return (
    <div>
      <ToastContainer
        autoClose={3000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
