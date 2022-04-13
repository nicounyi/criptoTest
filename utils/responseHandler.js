var dayjs = require('dayjs')

const AUTHOR = {
    name: 'Nicolas',
    lastname: 'Unyicio'
}


const handleBlock = (data) => {
    let resolve;
    resolve = {
        blockNumber : data.number,
        time: dayjs(data.timestamp * 1000).format('HH:mm:ss'),
        transactions: data.transactions,
        transactionsQuantity: data.transactions.length,
        miner: data.miner
    }
    return resolve;
};

const handleTransaction = (data) => {
    let resolve;
    resolve = {
        blockHash: data.blockHash,
        blockNumber: data.blockNumber,
        from: data.from,
        to: data.to,
        hash: data.hash,
        gasPrice: data.gasPrice / 1000000000
    }
    return resolve;
};


module.exports = {
    handleBlock,
    handleTransaction
}