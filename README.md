# algorand-automate 

A helpful function for automating blockchain transactions on algorand 

this function takes parameters for sender and receiver wallets as well as ASA IDs, txn amounts and txn notes. Running on AlgoExplorer api

```
import AlgoAuto from 'algorand-automate';


AlgoAuto({
    senderWalletMnemonic: '',
    senderWalletAddress: '',
    receiverWalletAddress: '',
    amount: 0,
    note: '',
    //Optional: include asset id, otherwise wallet will send ALGO
    assetId: 0,
    //Optional: console.log responses 
    response: true,
})

```
