Meteor.publish('articles', function() {
	return ArticleList.find();
});