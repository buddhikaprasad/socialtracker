Template.articleItem.helpers({
    ownPost: function() {
        return this.creatorUserId == Meteor.userId();
    },

    categories: function() {

    	
    	var obj = {};

    	for(i = 0 ; i < this.categories.length ; i++) {
    		
        	obj[ this.categories[i] ] = "_id - "+ this._id +" - "+ this.categories[i] + " - " + this.url;
        	
    	}

    	var l = Object.keys(obj).length;



        var array = $.map( obj, function(value, index) {
            return [value];
        });

       
        return array;
        



    }
});
