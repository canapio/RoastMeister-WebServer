// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : 'your-client-id', // your App ID
        'clientSecret'    : 'your-client-secret', // your App Secret
        'callbackURL'     : '/auth/facebook/callback'
    }, /* developers.facebook.com/apps/ */

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key',
        'consumerSecret'     : 'your consumer-secret',
        'callbackURL'        : '/auth/twitter/callback'
    }, /* https://apps.twitter.com/ */

    'googleAuth' : {
        'clientID'         : 'your-client-id',
        'clientSecret'     : 'your-client-secret',
        'callbackURL'      : '/auth/google/callback'
    }

};
