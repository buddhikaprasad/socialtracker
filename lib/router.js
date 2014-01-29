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
