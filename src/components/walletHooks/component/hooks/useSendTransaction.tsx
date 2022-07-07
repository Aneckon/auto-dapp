import React from 'react'
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';

const ADDRESS = '0xB3EBD0c0255dA5B3E745EC1b92cdbd95869dBdFf'

const useSendTransaction = () => {
    const { library, account } = useWeb3React();
    let web3 = new Web3(library?.provider);
    
    const setTransaction = async (amount: number) => {
        if (account) {
            console.log('transaction', amount)
            const transaction = await web3.eth.sendTransaction({to: ADDRESS, from: account, value: amount});
            console.log('transaction', transaction)
        } else {
            console.log('transaction error')
        }
    }
    
    return setTransaction
}

export default useSendTransaction