var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {

    var result = MessageView.render(message);

    console.log('messagesView', result);

    $('#chats').append(result);
  }

};
