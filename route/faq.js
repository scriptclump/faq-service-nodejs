'use strict';

module.exports = (app) => {
  var FAQ = require('../controller/FaqController');

  // FAQ Routes
  app.route('/faq')
    .get(FAQ.list_all_faq)
    .post(FAQ.create_a_faq);


  app.route('/faq/:faqId')
    .get(FAQ.read_a_faq)
    .put(FAQ.update_a_faq)
    .delete(FAQ.delete_a_faq);
};
