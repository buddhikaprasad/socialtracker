Template.articleItem.helpers({
    ownPost: function() {
        return this.userId == Meteor.userId();
    },

    categories: function() {
        return this.categories;
    }
});
