Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',


});

ArticleListController = RouteController.extend({
  template: 'articleList',
  increment: 5,
  limit: function() {
    return parseInt(this.params.articleLimit) || this.increment;
  },
  findOptions: function() {
    return {sort: {submitted: -1}, limit: this.limit()};
  },
  waitOn: function() {
    return Meteor.subscribe('articles', this.findOptions());
  },
  data: function() {
    return {articles: ArticleList.find({}, this.findOptions()),
    nextPath: this.route.path({articleLimit: this.limit() + this.increment})
    };
  }
});

Router.map(function() { 

    this.route('addArticles', {
        path: '/addArticles'
    });

    this.route('editArticles', {
        path: '/articles/:_id/edit',
        data: function() {
            return ArticleList.findOne(this.params._id);
        }
    });

  this.route('articleList', {
      path: '/:articleLimit?',
      controller: ArticleListController
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
