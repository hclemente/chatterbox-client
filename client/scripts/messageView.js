var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"></div>
        <div><%= username %><br><%= roomname %><br><%= text %></div>
      </div>
    `)

};

