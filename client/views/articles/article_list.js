Template.articleList.helpers({
    articles: function() {
        var user = Meteor.user()

        return ArticleList.find({userId:user._id},{sort: {submitted: -1}}
);
    }

});
