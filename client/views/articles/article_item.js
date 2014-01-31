Template.articleItem.helpers({
    ownPost: function() {
        return this.creatorUserId == Meteor.userId();
    },

    categories: function() {

    	
    	var obj = {};

        var tickedCategories = [];
            tickedCategories = this.tickedCategories;

            tickedCategories = (typeof tickedCategories != 'undefined' && tickedCategories instanceof Array) ? tickedCategories : []

    	for(i = 0 ; i < this.categories.length ; i++) {
            var tick = false;
    		if(_.contains(tickedCategories, this.categories[i])){
                tick = true;
            }
        	obj[ this.categories[i] ] = "_id - "+ this._id +" - "+ this.categories[i] + " - " +tick +" - "+ this.url;
        	
    	}

    	var l = Object.keys(obj).length;



        var array = $.map( obj, function(value, index) {
            return [value];
        });

       
        return array;
        



    }
});
