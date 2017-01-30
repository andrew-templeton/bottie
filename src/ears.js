"use strict";

var BotKit = require('botkit');

module.exports = Ears;

var Bot = BotKit.slackbot({
  debug: false,
  storage: undefined
});

function Ears(token) {
  this.scopes = [
    'direct_mention',
    'direct_message',
    'mention'
  ];
  
  // if we haven't defined a token, get the token from the session variable.
  if (Bot.token == undefined) {
    this.token = token;
    }
}

Ears.prototype.listen = function() {
  console.log('TOKEN: ' + this.token);
  this.bot = Bot.spawn({
    token: this.token
  }).startRTM();
  return this;
}

Ears.prototype.hear = function(pattern, callback) {
  Bot.hears(pattern, this.scopes, callback);
  return this;
};
