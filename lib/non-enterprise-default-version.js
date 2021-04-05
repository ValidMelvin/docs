const nEDV = Object.values(require('../lib/all-versions'))
  .find(version => version.nonEnterpriseDefault).version

module.exports = nEDV
