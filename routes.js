const routes = require('next-routes')();

// redirect any /hideout/:address to instead render
// the /hideout/show address. this overrides the
// default next js routing system
routes
  .add('/hideout/new', '/hideout/new')
  .add('/hideout/:address', '/hideout/show')

module.exports = routes;