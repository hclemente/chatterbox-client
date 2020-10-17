var Friends = {

  friends: {},

  $username: $('.username'),

  initialize: function() {
  },

  toggleStatus: function (username) {

    this.friends[username] = username;
  },
};