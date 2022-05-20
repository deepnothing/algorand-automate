
import algosdk from "algosdk";

const algodClient = new algosdk.Algodv2('', 'https://api.algoexplorer.io', '');

export const AlgoAuto = async (AlgoArgs) => {
    if (AlgoArgs.assetId) {
        try {
            const params = await algodClient.getTransactionParams().do();
            const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                suggestedParams: {
                    ...params,
                    fee: 1000,
                    flatFee: true,
                },
                from: AlgoArgs.senderWallet,
                to: AlgoArgs.receiverWallet,
                note: new Uint8Array(Buffer.from(AlgoArgs.note, "utf8")),
                amount: AlgoArgs.amount,
            });

            const signedTxn = await txn.signTxn(algosdk.mnemonicToSecretKey(AlgoArgs.senderWalletMnemonic).sk);

            const response = await algodClient.sendRawTransaction(signedTxn).do();

            if (AlgoArgs.response) {
                console.log(response);
            }

        } catch (err) {
            if (AlgoArgs.response) {
                console.log(err);
            }
        }
    } else {

        try {
            const params = await algodClient.getTransactionParams().do();
            const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                suggestedParams: {
                    ...params,
                    fee: 1000,
                    flatFee: true,
                },
                from: AlgoArgs.senderWallet,
                to: AlgoArgs.receiverWallet,
                note: new Uint8Array(Buffer.from(AlgoArgs.note, "utf8")),
                amount: AlgoArgs.amount,
                assetIndex: AlgoArgs.assetId
            });

            const signedTxn = await txn.signTxn(algosdk.mnemonicToSecretKey(AlgoArgs.senderWalletMnemonic).sk);

            const response = await algodClient.sendRawTransaction(signedTxn).do();

            if (AlgoArgs.response) {
                console.log(response);
            }

        } catch (err) {
            if (AlgoArgs.response) {
                console.log(err);
            }
        }

    }
}

