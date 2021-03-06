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
        });
    },
    // Get all upcoming PS4 tournaments and return JSON
    getUpcomingPS4: function(req,res){
        Tournaments.find({completed:false, platform:'PS4'}).exec(function(err, tournaments){
            if(err){
                res.send(500, 'Database Error');
            }
            res.json(tournaments);
        });
    },
    // Get all upcoming XB1 tournaments and return JSON
    getUpcomingXB1: function(req,res){
        Tournaments.find({completed:false, platform:'XB1'}).exec(function(err, tournaments){
            if(err){
                res.send(500, 'Database Error');
            }
            res.json(tournaments);
        });
    },
    // Get all upcoming PC tournaments and return JSON
    getUpcomingPC: function(req,res){
        Tournaments.find({completed:false, platform:'PC'}).exec(function(err, tournaments){
            if(err){
                res.send(500, 'Database Error');
            }
            res.json(tournaments);
        });
    },
    // Create a new Tournament from admin page
    // TODO: Sanitize and Validate
    addNewTournament: function(req,res){
        // Retrieve paramenters from form
        var platform = req.body.platform;
        var dateTime = req.body.dateTime;
        dateTime = new Date(dateTime);
        var maxTeams = parseInt(req.body.maxTeams);
        var gameType = req.body.gameType;
        completed = "false";
        // Import node-schedule
        var schedule = require('node-schedule');
        // Create a new record for the tournament
        // Tournaments.create({platform:platform, gameType:gameType, time:dateTime, maxTeams:maxTeams, completed:completed}).exec(function(err){
        Tournaments.create({platform:platform, gameType:gameType, time:dateTime, maxTeams:maxTeams, completed:completed}).then(function(resp){
            sails.log(resp.id);
            var j = schedule.scheduleJob(dateTime, function(){
                sails.log("made it");
            });
        });
        res.redirect('/admin');
    },
    // Join Tournament View
    joinTournamentView: function(req,res){
        var tournamentID = req.params.tournamentID;
        Tournaments.findOne({id:tournamentID}).exec(function(err, tournaments){
            if(err){
                res.send(500, 'Database Error');
            }
            // TODO: If tournament in progress or completed
            res.view('join', {tournament:tournaments, specificCSS:'join.css'});
        });
    },
    // View the actual tournament participants/bracket
    viewTournament: function(req, res){
        var tournamentID = req.params.tournamentID;
        Tournaments.findOne({id:tournamentID}).populate('teams').exec(function(err, teams){
            if(err){
                res.send(500, 'Database Error');
            }
            // res.json(teams);
            res.view('tournament', {teams:teams, specificCSS: 'tournamentView.css'});
        });
    }
};

