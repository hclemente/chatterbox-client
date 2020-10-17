var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#chats').on('click', handleClick);
  },

  renderMessage: function(message) {

    var result = MessageView.render(message);

    console.log('messagesView', result);

    $('#chats').append(result);



  },

  handleClick: function (event) {

    // event.target
    console.log(event.target);
    Friends.toggleStatus();

  }



};
