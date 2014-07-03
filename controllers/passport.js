var LocalStrategy = require('passport-local').Strategy;
var async = require('async');

var Admin = require('../models').Admin;

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        console.log("serializeUser");
        console.log(user);
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        console.log("deserializeUser");
        console.log(_id);
        Admin.findById(id, function (err, user) {
            console.log(user);
            done(err, user);
        });
    });

    passport.use(
        new LocalStrategy(function (username, password, done) {
            async.waterfall([
                function (done) {
                    Admin.findOne({ username: username }, done);
                },
                function (admin, done) {
                    if (!admin)
                        return done(null, false, {message: 'Noup!'});
                    admin.comparePassword(password, function (err, isMatch) {
                        if (err)
                            done(err);
                        else if (isMatch)
                            done(null, admin);
                        else
                            done(null, false, {message: 'Noup!'});
                    });
                }
            ], function (err, admin, data) {
                if (err)
                    return done(err, false, {message: 'Noup!'});
                done(null, admin, data);
            });
        })
    );
};
