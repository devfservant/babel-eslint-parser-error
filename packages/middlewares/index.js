if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist')
} else {
  // development or test
  module.exports = require('./src')
}
