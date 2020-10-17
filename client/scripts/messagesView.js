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
