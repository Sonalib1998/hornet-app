import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWalletInfoSuccess,
  fetchWalletInfoFailure,
  fetchTransactionDetailsSuccess,
  fetchTransactionDetailsFailure
} from '../actions';
import TransactionDetails from './TransactionDetails';
import './walletInfo.css'

const WalletInfo = () => {
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  const { error, walletInfo, transactionDetails } = useSelector(state => state);

  const handleTransactionClick = (txid) => {
    console.log(`Clicked on transaction with ID: ${txid}`);
  };

  const handleSearch = async () => {
    try {
      const walletData = require('../data/walletInfo.json');
      dispatch(fetchWalletInfoSuccess(walletData));

      const transactionData = require('../data/transactionData.json');
      dispatch(fetchTransactionDetailsSuccess(transactionData));
    } catch (error) {
      dispatch(fetchWalletInfoFailure(error.message));
      dispatch(fetchTransactionDetailsFailure(error.message));
    }
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Address"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
     
      {error && <p>Error: {error}</p>}

      {walletInfo && (
        <div className="wallet-info-container">
          <h2>Wallet Info</h2>
          <label >Address: <span className='address'>{walletInfo.validateaddress.address}</span></label><br></br>
          <label >Balance: <span className='balance'>{walletInfo.txHistory.balanceSat}</span></label><br></br>
          <label>Transactions: <span className='transaction'>{walletInfo.txHistory.txids.length}
          </span>
          </label>
         
          
        </div>
      )}

      {transactionDetails && <TransactionDetails details={transactionDetails} />}
    </>
  );
};

export default WalletInfo;
