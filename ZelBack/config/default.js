module.exports = {
  server: {
    homeport: 16126,
    apiport: 16127,
    apiporthttps: 16128,
  },
  database: {
    url: '127.0.0.1',
    port: 27017,
    local: {
      database: 'zelfluxlocal',
      collections: {
        loggedUsers: 'loggedusers',
        activeLoginPhrases: 'activeloginphrases',
        activeSignatures: 'activesignatures',
      },
    },
    daemon: {
      database: 'zelcashdata',
      collections: {
        // addreesIndex contains a) balance, b) list of all transacitons, c) list of utxos
        scannedHeight: 'scannedheight',
        utxoIndex: 'utxoindex',
        addressTransactionIndex: 'addresstransactionindex',
        fluxTransactions: 'zelnodetransactions',
        appsHashes: 'zelappshashes',
        coinbaseFusionIndex: 'coinbasefusionindex',
      },
    },
    appslocal: {
      database: 'localzelapps',
      collections: {
        appsInformation: 'zelappsinformation',
      },
    },
    appsglobal: {
      database: 'globalzelapps',
      collections: {
        appsMessages: 'zelappsmessages', // storage for all flux apps messages done on flux network
        appsInformation: 'zelappsinformation', // stores actual state of flux app configuration info - initial state and its overwrites with update messages
        appsTemporaryMessages: 'zelappstemporarymessages', // storages for all flux apps messages that are not yet confirmed on the flux network
        appsLocations: 'zelappslocation', // stores location of flux apps as documents containing name, hash, ip, obtainedAt
      },
    },
    fluxshare: {
      database: 'zelshare',
      collections: {
        shared: 'shared',
      },
    },
  },
  benchmark: {
    port: 16225,
    rpcport: 16224,
    porttestnet: 26225,
    rpcporttestnet: 26224,
  },
  daemon: {
    chainValidHeight: 1062000,
    port: 16125,
    rpcport: 16124,
    porttestnet: 26125,
    rpcporttestnet: 26124,
  },
  fluxTeamZelId: '1hjy4bCYBJr4mny4zCE85J94RXa8W6q37',
  fluxapps: {
    // in flux main chain per month (blocksLasting)
    price: [{ // any price fork can be done by adjusting object similarily.
      height: 0, // height from which price spec is valid
      cpu: 3, // per 0.1 cpu core,
      ram: 1, // per 100mb,
      hdd: 0.5, // per 1gb,
      minPrice: 1, // minimum price that has to be paid for registration or update. Flux listens only to message above or equal this price
    },
    {
      height: 983000, // height from which price spec is valid. Counts from when app was registerd on blockchain!
      cpu: 0.3, // per 0.1 cpu core,
      ram: 0.1, // per 100mb,
      hdd: 0.05, // per 1gb,
      minPrice: 0.1, // minimum price that has to be paid for registration or update. Flux listens only to message above or equal this price
    },
    {
      height: 1004000, // height from which price spec is valid. Counts from when app was registerd on blockchain! 1004000
      cpu: 0.06, // per 0.1 cpu core,
      ram: 0.02, // per 100mb,
      hdd: 0.01, // per 1gb,
      minPrice: 0.01, // minimum price that has to be paid for registration or update. Flux listens only to message above or equal this price
    }],
    appSpecsEnforcementHeights: {
      1: 0, // blockheight v1 is deprecated. Not possible to use api to update to its specs
      2: 0, // blockheight
      3: 983000, // blockheight. Since this blockheight specification of type 3 is active. User can still submit v1 or v2. UI allows only v2, v3
      4: 1004000, // v4 available
    },
    address: 't1LUs6quf7TB2zVZmexqPQdnqmrFMGZGjV6',
    epochstart: 694000,
    publicepochstart: 705000,
    portMin: 31000, // ports 30000 - 30999 are reserved for local applications
    portMax: 39999,
    maxImageSize: 500000000, // 500mb possibly increase later
    minimumInstances: 3,
    maximumInstances: 100,
    maximumAdditionalInstances: 1, // max instances above subscribed amount. In case of min instances, this is minimumInstances + maximumAdditionalInstances
    minOutgoing: 5,
    minIncoming: 2,
    installation: {
      probability: 100, // 1%
      delay: 120, // in seconds
    },
    removal: {
      probability: 25, // 4%
      delay: 300,
    },
    redeploy: {
      probability: 2, // 50%
      delay: 30,
      composedDelay: 5,
    },
    blocksLasting: 22000, // registered app will live for 22000 of blocks 44000 minutes ~= 1 month
    expireFluxAppsPeriod: 100, // every 100 blocks we run a check that deletes apps specifications and stops/removes the application from existence if it has been lastly updated more than 22k blocks ago
    updateFluxAppsPeriod: 9, // every 9 blocks we check for reinstalling of old application versions
    removeFluxAppsPeriod: 11, // every 11 blocks we check for more than maximum number of instances of an application
  },
  lockedSystemResources: {
    cpu: 10, // 1 cpu core
    ram: 2000, // 2000mb
    hdd: 30, // 30gb // this value is likely to rise
  },
  fluxSpecifics: { // tbd during forks
    cpu: {
      basic: 20, // 10 available for apps
      super: 40, // 30 available for apps
      bamf: 80, // 70 available for apps
    },
    ram: {
      basic: 3000, // 1000 available for apps
      super: 7000, // 5000 available for apps
      bamf: 30000, // available 28000 for apps
    },
    hdd: {
      basic: 50, // 20 for apps
      super: 150, // 120 for apps
      bamf: 600, // 570 for apps
    },
    collateral: { // tbd during forks
      basic: 10000,
      super: 25000,
      bamf: 100000,
    },
  },
};
