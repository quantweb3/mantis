const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@a': path.resolve(__dirname, 'src/'),
            '@api': path.resolve(__dirname, 'src/api/'),
            '@cfg': path.resolve(__dirname, 'src/config/'),
            '@images': path.resolve(__dirname, 'src/assets/images/')
        }
    }
};
