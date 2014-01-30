Template.addArticles.events({
    'submit form': function(e) {
        e.preventDefault();
        var repete;
        $('input[name=Repete]:checked').each(function() {
            repete = ($(this).val());
        });

        var categories = [];
        $('input[type=checkbox]:checked').each(function() {
            categories.push($(this).val());
        });


        console.log(categories);


        var article = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            repete: repete,
            categories: categories
        }

        

        Meteor.call('postArticle', article, function(error, id) {
            if (error)
                return alert(error.reason);
            Router.go('articleList', {
               
            });
        });




    }
});
