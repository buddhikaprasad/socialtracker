Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',


});





Router.map(function() {
    this.route('articleList', {
        path: '/'

    });

    this.route('addArticles', {
        path: '/addArticles'
    });



    this.route('editArticles', {
        path: '/articles/:_id/edit',
        data: function() {
            return ArticleList.findOne(this.params._id);
        }
    });



});

var requireLogin = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn())
            this.render(this.loadingTemplate);
        else
            this.render('accessDenied');
        this.stop();
    }
}
Router.before(requireLogin, {
    only: 'addArticles'
});
