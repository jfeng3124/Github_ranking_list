const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: {type: String, unique: true},
  owner: String,
  html_url: String,
  pushed_at: Date,
  description: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = repos => {
  repos.forEach(repo => {
    let list = new Repo();
    list.name = repo.name;
    list.owner = repo.owner.login;
    list.html_url = repo.html_url;
    list.pushed_at = repo.pushed_at;
    list.description = repo.description;
    list.save();
  })
}

let find = (callback) => {
  Repo.find().sort({pushed_at: -1}).limit(25).exec((err, repos) => {
    if (err) throw (err);
    callback(repos)
  })
}

module.exports.save = save;
module.exports.find = find;