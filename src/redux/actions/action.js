import * as backend from '../../smartContract/build/index.main.mjs';
import {
  SET_ACCOUNT,
  SET_BALANCE,
  SET_NETWORK,
  SET_CONTRACT,
  STORE_USER,
  SET_USER_BALANCE,
} from '../Types/types';
import { loadStdlib } from '@reach-sh/stdlib';
// const stdlib = loadStdlib()
const reach = loadStdlib('ALGO');
reach.setProviderByName('TestNet');

export const setAccount = acc => {
  return {
    type: SET_ACCOUNT,
    payload: acc,
  };
};

export const setBalance = bal => {
  return dispatch => {
    dispatch({
      type: SET_BALANCE,
      payload: bal,
    });
  };
};

export const setNetwork = net => {
  return dispatch => {
    dispatch({
      type: SET_NETWORK,
      payload: net,
    });
  };
};

export const setContract = ctc => {
  return {
    type: SET_CONTRACT,
    payload: ctc,
  };
};

export const disconnect = () => {
  return dispatch => {
    dispatch({ type: STORE_USER, payload: null });
  };
};

export const storeWallet = payload => {
  return async dispatch => {
    let user;
    if (typeof window.AlgoSigner !== 'undefined') {
      // connects to the browser AlgoSigner instance
      window.AlgoSigner.connect()
        // finds the TestNet accounts currently in AlgoSigner
        .then(() =>
          window.AlgoSigner.accounts({
            ledger: 'TestNet',
          }),
        )
        .then(accountData => {
          // the accountData object should contain the Algorand addresses from TestNet that AlgoSigner currently knows about
          console.log('ahajakl', accountData);
          user = accountData;
          localStorage.setItem('address', user);
          dispatch({ type: STORE_USER, payload: accountData });
        })
        .catch(e => {
          // handle errors and perform error cleanup here
          console.error(e);
        });
    } else {
      alert('Please install AlgoSigner');
    }
  };
};

export const handleImportAccount = mnemonic => {
  return async dispatch => {
    try {
      const acc = await reach.newAccountFromMnemonic(mnemonic.trim());
      console.log('acc', acc);

      // check balance of account before funding
      let balanceOfAcc = await reach.balanceOf(acc);
      console.log('Checking the balance of our imported account');
      console.log(reach.formatCurrency(balanceOfAcc, 6));
      const balance = reach.formatCurrency(balanceOfAcc, 6);
      if (balance < 4) {
        alert('You do not have enough balance to make use of this platform');
        dispatch(disconnect());
      }
      dispatch({ type: STORE_USER, payload: acc });
      dispatch({ type: SET_USER_BALANCE, payload: balance });
    } catch (err) {
      console.log(err);
      alert('Something went wrong. Please try again later');
    }
  };
};

export const connectToContract = payload => {
  return async () => {
    const { name, biddingFloor, deadline, nftId } = payload;

    const details = {
      name,
      biddingFloor,
      deadline,
      nftId,
    };
    console.log(details);

    const acc = JSON.parse(localStorage.getItem('acc'));

    //save nft details to db
    //get image url

    // const acc2= acc.current[0]['address']

    console.log(acc.current[0]['address']);

    const newacc = await reach.connectAccount({
      addr: acc.current[0]['address'],
    });
    const balance = await reach.balanceOf(newacc);
    console.log(balance);
    console.log(newacc);
    const ctc = newacc.contract(backend);

    ctc.getInfo().then(info => {
      console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
    });

    if (reach.balanceOf(newacc, nftId) >= 1) {
      const interact = {};

      interact.details = details;
    } else {
      alert('you do not have the nft');
    }
  };
};

export const makeBid = payload => {
  //get bidders account
  // ctc = acc.contract(backend, info);
  // ctc.apis.Bidder.bid()
};
