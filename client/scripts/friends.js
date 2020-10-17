var Friends = {

  // $friends: $('#friends'),

  friends: {},

  $username: $('.username'),

  initialize: function() {
  },

  // toggle: $($username).click(function() {
  //   toggleStatus();
  // }),

  toggleStatus: function (username) {
    //this.addEventListener('click', function (event) {}
    this.friends[username] = username;
  },



};