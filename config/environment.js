'use strict';

module.exports = {
  'development': {
    'db': 'mongodb://localhost/test'
  },
  'production': {
    'db': process.env.MONGOHQ_URL
  }
}
