Template.articleList.helpers({
	hasMorePosts: function(){
		this.articles.rewind();
		return Router.current().limit() == this.articles.fetch().length;

	}


});