// ESM
import pkg from '@xelis/sdk/config.js';
const { TESTNET_NODE_RPC } = pkg;

import DaemonRPC from '@xelis/sdk/daemon/rpc.js'
// CommonJS
// const { TESTNET_NODE_RPC } = require('@xelis/sdk/config')
// const { RPC: DaemonRPC } = require('@xelis/sdk/daemon/rpc')

const main = async () => {
    const daemon = new DaemonRPC(TESTNET_NODE_RPC)
    const info = await daemon.getInfo()
    console.log(info)
}

main()