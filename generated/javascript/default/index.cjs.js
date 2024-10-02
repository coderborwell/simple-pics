const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'drive_fb_project',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

