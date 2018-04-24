/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // Register users into DB
    // TODO: Validate and sanitize
	registerUser: function(req,res){
        // retrieve inputs
        var username = req.body.username;
        var pw = req.body.password;
        var email = req.body.email;
        // bcrypt
        var bcrypt = require('bcrypt');
        const saltRounds = 10;
        // Encrypt PW
        bcrypt.genSalt(saltRounds, function(err, salt){
            bcrypt.hash(pw, salt, function(err, hash){
                // Put user info into database
                if(res){
                    Users.create({username:username, password:hash, email:email}).exec(function(err){
                        if(err){
                            res.send(500, 'Database Error');
                        }
                        // Redirect if successful
                        res.redirect('/');
                    });
                }
            });
        });
    },
    // Login and create session variable
    // TODO: Validate and Sanitize
    loginUser: function(req,res){
        // Retrieve inputs
        var username = req.body.username;
        var pw = req.body.password;
        // bcrypt compare
        var bcrypt = require('bcrypt');
        Users.findOne({username:username}).exec(function(err, resUser){
            // console.log(resUser);
            if(err){
                res.redirect(login);
            }
            else{
                bcrypt.compare(pw, resUser.password, function(err, resComp){
                    // If passwords match, set session to username
                    if(resComp){
                        req.session.ID = resUser.id;
                        req.session.userName = resUser.username;
                        res.redirect('/');
                    }
                    else{
                        console.log("Password mismatch");
                    }
                });
            }
        });
    },
    // Logout and destroy session
    logout: function(req, res){
        req.session.destroy(function(err){
            setTimeout(function(){
                res.redirect('/');
            }, 1000);
        });
    },
    // View user profile
    viewUser: function(req, res){
        var username = req.params.username;
        Users.findOne({username:username}).exec(function(err, user){
            if(err){
                res.send(500, 'Database Error');
            }
            res.view('user', {user:user, username:username});
        });
    },
    // View Leaderboard
    viewLeaderboard: function(req, res){
        Users.find({sort:'points DESC'}).exec(function(err, users){
            if(err){
                res.send(500, 'Databases Error');
            }
            res.view('leaderboard', {users:users, specificCSS:'leaderboard.css'});
        });
    },
    // View Settings
    userSettingsView: function(req, res){
        Users.findOne({id:req.session.ID}).exec(function(err, user){
            res.view("userSettings", {user:user});
        });
    },
    updateSettings: function(req, res){
        // Retrieve form info
        var gamertag = req.body.gamertag;
        var platform = req.body.platform;
        var userID = req.session.ID;
        sails.log(gamertag + " " + platform + " " + userID);
        if(platform == "xb1"){
            sails.log("xb1");
            Users.update({id:userID},{xb1:gamertag}).exec(function(err){
                if(err){
                    res.send(500, 'Database Error');
                }
                res.redirect('/user/settings');
            });
        }
        else if(platform == "ps4"){
            sails.log("xb1");
            Users.update({id:userID},{ps4:gamertag}).exec(function(err){
                if(err){
                    res.send(500, 'Database Error');
                }
                res.redirect('/user/settings');
            });
        }
        else if(platform == "pc"){
            sails.log("xb1");
            Users.update({id:userID},{pc:gamertag}).exec(function(err){
                if(err){
                    res.send(500, 'Database Error');
                }
                res.redirect('/user/settings');
            });
        }
        else {
            res.redirect('/user/settings');
        }
        // Users.update({id:req.session.ID}).set({platform:gamertag});
    }
};

