export const fetchWalletInfoSuccess = (data) => ({
  type: 'FETCH_WALLET_INFO_SUCCESS',
  payload: data
});

export const fetchWalletInfoFailure = (error) => ({
  type: 'FETCH_WALLET_INFO_FAILURE',
  payload: error
});

export const fetchTransactionDetailsSuccess = (data) => ({
  type: 'FETCH_TRANSACTION_DETAILS_SUCCESS',
  payload: data
});

export const fetchTransactionDetailsFailure = (error) => ({
  type: 'FETCH_TRANSACTION_DETAILS_FAILURE',
  payload: error
});
