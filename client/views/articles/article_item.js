Template.articleItem.helpers({
    ownPost: function() {
        return this.creatorUserId == Meteor.userId();
    },

    categories: function() {

    	var x = [];
    	var obj = {};

    	for(i = 0 ; i < this.categories.length ; i++) {
    		
        	obj[ this.categories[i] ] = this.categories[i] + " - " + this.url;
        	
    	}


        var array = $.map( obj, function(value, index) {
            return [value];
        });
        return array;
        



    }
});
