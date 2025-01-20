
function okXIniter() {
    return new OKXTonConnectUISdk.OKXTonConnectUI({
        dappMetaData: {
            name: "PIGS",
            icon: "https://wanoghoco.github.io/pigs_side/pig_logo.png"
        },
        buttonRootId: 'button-root',
        actionsConfiguration: {
            returnStrategy: 'none'
        },
        uiPreferences: {
            theme: OKXTonConnectUISdk.THEME.LIGHT
        },
        language: 'en_US',
        restoreConnection: true
    });
}


function onConnectOKXWallet() {

    const okxTonConnectUI = okXIniter();
    okxTonConnectUI.openModal();
}


function isOkxConnected() {
    const okxTonConnectUI = okXIniter();
    const isConnected = okxTonConnectUI.connected;
    return isConnected;

}

async function startTransaction() {

    const okxTonConnectUI = okXIniter();
    if (!isOkxConnected) {
        console.error('User is not connected');
        return;
    }

    // Prepare the transaction parameters
    const transactionParams = {
        "validUntil": Date.now() / 1000 + 360,
        from: okXIniter().wallet.account.address,
        to: 'UQCpF-g99gkbrDHAVSmBPwnB1q33EKuC9WveqwyQewCpyP8l',
        amount: '0.5',
        "messages": [
            {
                "address": "UQCpF-g99gkbrDHAVSmBPwnB1q33EKuC9WveqwyQewCpyP8l",
                "amount": "0.5",
                "stateInit": "base64bocblahblahblah=="
            }

        ]
    };

    try {
        const result = await okxTonConnectUI.sendTransaction(transactionParams, { modals: 'all', });
        console.log('Transaction Result:', result);
    } catch (error) {
        console.error('Transaction Error:', error);
    }

}