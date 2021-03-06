var model = require('../models/db.js');

module.exports = {

  sessions: {
    getAll: function(req, res) {

      model.sessions.getAll()
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        console.log(error);
      });
    },

    getUserSessions: function(req, res) {
      var username = req.query.username;

      model.sessions.getUserSessions(username)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        console.log(error);
      });
    },
    createMeetUp: function(req, res) {
      var meetUpObject = req.body;

      model.sessions.createMeetUp(meetUpObject);
      res.sendStatus(200);
    },

    deleteMeetUp: function(req, res) {
      var meetUpObject = req.body;

      model.sessions.deleteMeetUp(meetUpObject);
      res.sendStatus(200);
    }
  }
};
