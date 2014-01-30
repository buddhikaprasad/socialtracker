


Meteor.subscribe('articles', this.userId );

Handlebars.registerHelper("log", function(context) {
    return console.log(context);
});


