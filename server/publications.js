Meteor.publish('articles', function(sort,limit) {
  return ArticleList.find({}, {sort: sort, limit: limit});
});

Meteor.publish('completed', function(id) {
return id && Posts.find(id);
});
