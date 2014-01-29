Template.articleList.helpers({
    articles: function() {
        return ArticleList.find({}, {sort: {submitted: -1}}
);
    }

});
