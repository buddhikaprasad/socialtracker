if(Meteor.isClient) {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '240235446150535',
      status     : true,
      xfbml      : true
    });
  };
}

Meteor.subscribe('articles');

Handlebars.registerHelper("log", function(context) {
    return console.log(context);
});


