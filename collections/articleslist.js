ArticleList = new Meteor.Collection('articles');

ArticleList.allow({
    update: ownsDocument,
    remove: ownsDocument
});


Meteor.methods({
    postArticle: function(postAttributes) {
        var user = Meteor.user(),
            postWithSameLink = ArticleList.findOne({
                url: postAttributes.url
            });
        // ensure the user is logged in
        if (!user)
            throw new Meteor.Error(401, "You need to login to post new stories");
        // ensure the post has a title
        if (!postAttributes.url)
            throw new Meteor.Error(422, 'Please insert a URL');

        // pick out the whitelisted keys
        var post = _.extend(_.pick(postAttributes, 'url', 'repete', 'categories'), {
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });
        var postId = ArticleList.insert(post);
        return postId;
    }
});
