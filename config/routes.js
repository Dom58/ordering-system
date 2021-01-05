/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'POST /api/auth/signup': { action: 'userAccount/signup' },
  'POST /api/auth/login': { action: 'userAccount/login' },
  'POST /api/items/create': { action: 'items/create'  },
  'GET /api/items': { action: 'items/index'  },
  'POST /api/orders/create': { action: 'orders/create'  },
  'GET /api/orders': { action: 'orders/index'  },
  'PATCH /api/orders/:id': { action: 'orders/update'  },
  'GET /api/orders/me/:id': { action: 'orders/me'  },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
