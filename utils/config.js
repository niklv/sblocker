module.exports = {
    development: {
        http: {
            port: 20301
        },
        https: {
            port: 20302,
            options: {
            }
        }
    },
    production: {
        http: {
            port: 20301
        },
        https: {
            port: 20302,
            options: {
            }
        }
    },
    security: {
        tokenLength: 48, //bytes
        standartTokenLife: 60 * 60 * 24 * 365, //one year
        registrationTokenLife: 60 * 60 * 24, //one day
        maxAllowedTokens: 3
    },
    mongo: {
        user: "developer",
        pwd: "fwaocbnw3rwctn38ctfgw38x4nt0crtfnzxmg4t30nwct043",
        //url: "localhost:27017",
        url: "37.139.15.10:27017",
        db: "sblocker"
    }
};
