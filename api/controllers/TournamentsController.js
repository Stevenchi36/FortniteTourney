/**
 * TournamentsController
 *
 * @description :: Server-side logic for managing Tournaments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // Get all upcoming tournaments and return JSON
	getUpcomingTournaments: function(req,res){
        Tournaments.find({completed:false}).exec(function(err, tournaments){
            if(err){
                res.send(500, 'Database Error');
            }
            res.json(tournaments);
        })
    },
    // Get all upcoming PS4 tournaments and return JSON
    getUpcomingPS4: function(req,res){
        Tournaments.find({completed:false, platform:'PS4'}).exec(function(err, tournaments){
            if(err){
                res.send(500, 'Database Error');
            }
            res.json(tournaments);
        })
    },
    // Get all upcoming XB1 tournaments and return JSON
    getUpcomingXB1: function(req,res){
        Tournaments.find({completed:false, platform:'XB1'}).exec(function(err, tournaments){
            if(err){
                res.send(500, 'Database Error');
            }
            res.json(tournaments);
        })
    },
    // Get all upcoming PC tournaments and return JSON
    getUpcomingPC: function(req,res){
        Tournaments.find({completed:false, platform:'PC'}).exec(function(err, tournaments){
            if(err){
                res.send(500, 'Database Error');
            }
            res.json(tournaments);
        })
    },
};

