/**
 * TeamsController
 *
 * @description :: Server-side logic for managing Teams
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createTeam: function(req,res){
        var tournamentID = req.params.tournamentID
        if(typeof req.session.userName == 'undefined'){
            sails.log("It is undefined");
        }
        else{
            sails.log(tournamentID);
        }
    }
};

