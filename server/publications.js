Meteor.publish('articles', function(sort,limit) {
  return ArticleList.find({}, {sort: sort, limit: limit});
});