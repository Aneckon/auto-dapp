import React from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';

const ADDRESS = '0xB3EBD0c0255dA5B3E745EC1b92cdbd95869dBdFf';

export const useSendTransaction = () => {
  const { library, account } = useWeb3React();
  let web3 = new Web3(library?.provider);

  const setTransaction = async (amount: number) => {
    if (account) {
      const value = amount * 10 ** 18;

      await web3.eth
        .sendTransaction({ to: ADDRESS, from: account, value: +value })
        .once('receipt', function (receipt) {
          if (receipt) {
            toast.success('Success transaction');
          }
        })
        .on('error', function (error) {
          if (error) {
            toast.error('No success transaction');
          }
        });
    } else {
      console.log('transaction error');
    }
  };

  return { setTransaction };
};
