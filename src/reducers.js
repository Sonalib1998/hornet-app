// reducers.js
const initialState = {
  walletInfo: null,
  transactionDetails: null,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WALLET_INFO_SUCCESS':
      return { ...state, walletInfo: action.payload, error: null };
    case 'FETCH_WALLET_INFO_FAILURE':
      return { ...state, error: action.payload };
    case 'FETCH_TRANSACTION_DETAILS_SUCCESS':
      return { ...state, transactionDetails: action.payload, error: null };
    case 'FETCH_TRANSACTION_DETAILS_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
