'use strict';

module.exports = {
  'development': {
    'db': 'mongodb://seanl:skooliznawtKewl!@kahana.mongohq.com:10006/tedxumassamherst2015'
  },
  'production': {
    'db': process.env.MONGOHQ_URL
  }
}
