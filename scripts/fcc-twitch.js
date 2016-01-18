

var getStream = function(user) {
  $.getJSON('https://api.twitch.tv/kraken/streams/' + user + '?callback=?', function(data) {

    if (data.hasOwnProperty('error') && data.error == "Unprocessable Entity") {
      $('#streamers').append('<a href="#"><div class="stream closed"><div class="banner"><img class="photo" src="http://placehold.it/50x50"/></div><div class="userInfo"><p class="userName">' + user + '</p><p class="status">' + 'Account Closed' + '</p></div></div></a>');

    } else if (data.stream == null) {
      console.log(data);
      var link = "http://www.twitch.tv/"+user;
      $('#streamers').append('<a href="'+link+'" target="_blank"><div class="stream "><div class="banner"><img class="photo" src="http://placehold.it/50x50"/></div><div class="userInfo"><p class="userName">' + user + '</p><p class="status">' + 'Offline' + '</p></div></div></a>');
    } else {
      console.log(data);
      var link = data.stream.channel.url;
      var dispName = data.stream.channel["display_name"];
      var game = data.stream.game;
      var banner = data.stream.channel.logo;
      $('#streamers').append('<a href="'+link+'" target="_blank"><div class="stream active"><div class="banner"><img class="photo" src="' + banner + '"/></div><div class="userInfo"><p class="userName">' + dispName + '</p><p class="status">' + game + '</p></div></div></a>');

    }
    return data;

  })

};

$(document).ready(function() {
  var usernames = ["ESL_SC2", "storbeck","FreeCodeCamp", "terakilobyte", "Habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "Beohoff","comster404","brunofin"];

  var name, response;
  for (var ind = 0; ind < usernames.length; ind++) {
    name = usernames[ind];
    getStream(name)
  }
});
