const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  username = JSON.parse(username)
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    method: "GET",
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, callback);
}

module.exports.getReposByUsername = getReposByUsername;