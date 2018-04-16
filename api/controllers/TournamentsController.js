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
    // Create a new Tournament from admin page
    addNewTournament: function(req,res){
        var platform = req.body.platform;
        var dateTime = req.body.dateTime;
        var maxTeams = req.body.maxTeams;
        var gameType = req.body.gameType;
        dateTime = new Date(dateTime);
        Tournaments.create({platform:'PS4', time:'2018-04-11 04:30:00'}).exec(function(err){
            if(err){
                // console.log("ERROR " + platform);
                res.send(500, 'Database Error');
            }
            // console.log(dateTime);
            res.redirect('/admin');
        });
    }
};

