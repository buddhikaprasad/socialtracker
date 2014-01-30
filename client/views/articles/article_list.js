Template.articleList.helpers({
    articles: function() {
        var user = Meteor.user()

        return ArticleList.find({userId:user._id, showArticle:1},{sort: {submitted: -1}}
);
    }

});
