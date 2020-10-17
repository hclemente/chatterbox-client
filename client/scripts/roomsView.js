var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('#rooms').find('button').on('click', RoomsView.handleClick);
  },

  renderRoom: function(room) {
    $('#rooms select').append(`<option>${room}</option>`);
  },

  handleClick: function (event) {
    var room = event.currentTarget.innerText;

    Rooms.add(room);
  }

};
