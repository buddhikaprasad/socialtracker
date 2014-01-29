Meteor.subscribe('articles');

Handlebars.registerHelper("log", function(context) {
  return console.log(context);
});
