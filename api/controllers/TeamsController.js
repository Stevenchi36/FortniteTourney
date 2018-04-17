/**
 * TeamsController
 *
 * @description :: Server-side logic for managing Teams
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createTeam: function(req,res){
        var tournamentID = req.params.tournamentID
        // If user is NOT logged in
        if(typeof req.session.userName == 'undefined'){
            res.redirect('/');
        }
        // If user IS logged in
        else{
            sails.log(tournamentID + " " + req.session.userName);
            Teams.create({name:req.session.userName, tournament:tournamentID}).exec(function(err){
                sails.log("Created a Team");
                if(err){
                    res.send(500, 'Database Error');
                }
                // console.log(dateTime);
                res.redirect('/');
            });
        }
    }
};

