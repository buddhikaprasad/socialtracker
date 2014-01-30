Template.articleItem.helpers({
    ownPost: function() {
        return this.userId == Meteor.userId();
    },

    categories: function() {

    	var x = [];
    	var obj = {};

    	for(i = 0 ; i < this.categories.length ; i++) {
    		
        	obj[ this.categories[i] ] = this.categories[i] + " - " + this.url;
        	
    	}

    	
        
		_.extend({
            url: this.url
        }, this.categories)

        var array = $.map( obj, function(value, index) {
            return [value];
        });
        return array;
        console.log(array);



    }
});
