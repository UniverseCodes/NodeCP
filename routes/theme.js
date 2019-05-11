const axios = require('axios');

module.exports = {
  method: 'post',
  route: '/theme',
  exec: async function(request, response, next) {
    request.session.THEMES = request.body.theme;

    response.send({ redirect: request.WEB_CONFIG.baseURI ? `/${request.WEB_CONFIG.baseURI}` : '/' });
  }
};
