Template.articleList.helpers({
	hasMoreArticles: function(){
		this.articles.rewind();
		return Router.current().limit() == this.articles.fetch().length;
	}
});