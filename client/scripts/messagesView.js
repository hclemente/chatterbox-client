/**
 * @justification class intended to access messages in the database
 * @specification
 *  @IOCE
 * @explanation
 *
 */
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#chats').on('click', MessagesView.handleClick);
    // $('.button').on('click', MessagesView.addRoom);
  },

  renderMessage: function(message) {

    var result = MessageView.render(message);

    console.log('messagesView', result);

    $('#chats').append(result);
  },

  render: function(data) {
    for (var i = 0; i < data.results.length; i++) {
      if (!data.results[i].username) {
        data.results[i].username = 'Anonymous';
      }
      if (!data.results[i].roomname) {
        data.results[i].roomname = 'Anonymous';
      }
      if (!data.results[i].text) {
        data.results[i].text = '';
      }
      var message = MessageView.render(data.results[i]);
      $('#chats').append(message);
    }
  },

  handleClick: function (event) {
    var username = event.currentTarget.innerText;
    // event.target
    // console.log(event.target);
    Friends.toggleStatus(username);
  },

  // addRoom: function (event) {
  //   var room = event.currentTarget.innerText;

  // }


};
