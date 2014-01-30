Template.editArticles.helpers({
    repeteNever: function() {
        return _.contains(this.repete, 'never') ? 'checked' : '';
    },

    repeteFrequently : function() {
        return _.contains(this.repete, 'frequently') ? 'checked' : '';
    },

    repeteNotFrequently : function() {
        return _.contains(this.repete, 'notFrequently') ? 'checked' : '';
    },


    chcekFb: function() {
        return _.contains(this.categories, 'Facebook') ? 'checked' : '';
    },

    chcektwitter: function() {
        return _.contains(this.categories, 'Twitter') ? 'checked' : '';
    },

    chceckgpls: function() {
        return _.contains(this.categories, 'G+') ? 'checked' : '';
    },

    checklinkedin: function() {
        return _.contains(this.categories, 'Linkedin') ? 'checked' : '';
    },
    checkpin: function() {
        return _.contains(this.categories, 'Pinterest') ? 'checked' : '';
    },
    checkreddit: function() {
        return _.contains(this.categories, 'Reddit') ? 'checked' : '';
    },
    checkstu: function() {
        return _.contains(this.categories, 'Stumbleupon') ? 'checked' : '';
    },

});

Template.editArticles.events({
    'submit form': function(e) {
        e.preventDefault();
        var currentArticleId = this._id;
        var repete;
        $('input[name=Repete]:checked').each(function() {
            repete = ($(this).val());
        });

        var categories = [];
        $('input[type=checkbox]:checked').each(function() {
            categories.push($(this).val());
        });

        var article = {
            url: $(e.target).find('[name=url]').val(),
            repete: repete,
            categories: categories
        }



        ArticleList.update(currentArticleId, {
            $set: article
        }, function(error) {
            if (error) {
                // display the error to the user
                throwError(error.reason);
            } else {
                Router.go('articleList');
            }
        });
    },
    'click .delete': function(e) {
        e.preventDefault();
        if (confirm("Delete this post?")) {
            var currentArticleId = this._id;
            ArticleList.remove(currentArticleId);
            Router.go('articleList');
        }
    }
});