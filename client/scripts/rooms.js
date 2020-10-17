/**
 * @justification database intended to store a list of rooms to be entered for specific messages
 * @specification
 *  @IOCE
 * @explanation
 *
 */
var Rooms = {

  rooms: {},

  $button: $('.button'),

  initialize: function() {
  },

  add: function (room) {
    this.rooms[room] = room;
  }

};