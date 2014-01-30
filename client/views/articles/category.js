Template.category.helpers({
	fullUrl: function(){
		 var array = this.split("-");
		 var res = array[0].trim();

		if( res == "Facebook"){
			return "https://www.facebook.com/sharer/sharer.php?u=" + this.substring(res.length+3);

		}
	},

	imageName: function() {
		var array = this.split("-");
		var res = array[0].trim();
		return res;
	},

	isNotLink : function() {
		var res = this.substring(0,3);

		if (res == "url"){
			return false;
		}

		return true;
	},



});

