/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  // User Actions
  '/register': { 
    view: 'register',
    locals: {
      specificCSS: 'register.css'
    }
  }, // Register View
  '/addUser': 'UsersController.registerUser', // Register User action
  '/loginUser': 'UsersController.loginUser', // Login
  '/logout': 'UsersController.logout', // Logout
  '/user/settings': 'UsersController.userSettingsView', // User Settings View
  '/update/settings':'UsersController.updateSettings', // Update User Settings
  '/user/:username': 'UsersController.viewUser', // User profile
  '/leaderboard': 'UsersController.viewLeaderboard', // Leaderboard
  // Tournament Actions
  '/join/Tournament/:tournamentID': 'TournamentsController.joinTournamentView', // Join's view page
  '/createTeam/Tournament/:tournamentID':'TeamsController.createTeam', // Actually join tournament 
  '/view/Tournament/:tournamentID':'TournamentsController.viewTournament', // View Tournament
  // Admin
  '/admin': {
    view: 'admin',
    locals: {
      specificCSS: 'admin.css'
    }
  }, // New Tournament View
  '/create/Tournament': 'TournamentsController.addNewTournament', // Create Tournament Action
  // API
  '/api/getUpcoming': 'TournamentsController.getUpcomingTournaments', // Return JSON of all tournaments
  '/api/getUpcomingPS4': 'TournamentsController.getUpcomingPS4', // Return JSON of PS4 tournaments
  '/api/getUpcomingXB1': 'TournamentsController.getUpcomingXB1', // Return JSON of XB1 tournaments
  '/api/getUpcomingPC': 'TournamentsController.getUpcomingPC', // Return JSON of PC tournaments
};
