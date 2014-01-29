Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return Meteor.subscribe('articles');
    }

});


Router.map(function() {
    this.route('articleList', {
        path: '/'
    });

    this.route('addArticles', {
        path: '/addArticles'
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
