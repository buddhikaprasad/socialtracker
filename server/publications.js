Meteor.publish('articles', function(user) {

  return ArticleList.find();
});