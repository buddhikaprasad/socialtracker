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
        var post = _.extend(_.pick(postAttributes, 'url', 'title', 'repete', 'categories'), {
            creatorUserId: user._id,
            author: user.username,
            submitted: new Date().getTime(),
            userId: user._id,
            showArticle : 1
        });

        var users = Meteor.users.find({}, {
            _id: 1
        }).fetch();

        console.log(users.length);

        for (var i = 0; i < users.length; i++) {
        	console.log("hello world"); 
        	console.log(users[i]._id + " " + user._id); 
            var userPost = _.extend(_.pick(postAttributes, 'url', 'title', 'repete', 'categories'), {
                creatorUserId: user._id,
                author: user.username,
                submitted: new Date().getTime(),
                userId: users[i]._id,
                showArticle : 1
            });
            if (users[i]._id != user._id) {
                ArticleList.insert(userPost);
            }

        };

        var postId = ArticleList.insert(post);
        return postId;
    }
});
