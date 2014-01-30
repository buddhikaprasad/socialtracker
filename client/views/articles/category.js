Template.category.helpers({
	fullUrl: function(){
		 var array = this.split("-");
		 var res = array[2].trim();
     console.log(res);

		if( res == "Facebook"){
			return "https://www.facebook.com/sharer/sharer.php?u=" + this.substring(res.length+3);
		}
    else if ( res == "Twitter" ){
      return "http://twitter.com/share?text=&url=" + this.substring(res.length+3);
    }
    else if ( res == "G+" ){
      return "https://plus.google.com/share?url=" + this.substring(res.length+3);
    }
    else if ( res == "Linkedin" ){
      return "http://www.linkedin.com/shareArticle?mini=true&url=" + this.substring(res.length+3) + "&title=&summary=&source=";
    }
    else if ( res == "Pinterest" ){
      return "done"
    }
    else if ( res == "Reddit" ){
      return "http://reddit.com/submit?url=" + this.substring(res.length+3);
    }
    else if ( res == "Stumbleupon" ){
      return "http://www.stumbleupon.com/submit?url=" + this.substring(res.length+3);
    }
	},

	imageName: function() {
		var array = this.split("-");
		var res = array[2].trim();
		return res;
	},

	isNotLink : function() {
		var res = this.substring(0,3);

		if (res == ""){
			return false;
		}

		return true;
	},

  id : function () {
    var array = this.split("-");
     var res = array[1].trim() + array[2].trim();
     console.log(res);
     return res;
  }
});

Template.category.events({

    'click img': function(e) {
    	console.log( arguments[1].data);
    	console.log(this);
    	console.log( arguments.data);
      console.log(e.target);
    var array = arguments[1].data.split("-");
     var res = "#"+array[1].trim() + array[2].trim();
     console.log(res);
    	$(res).attr("checked",true);
        
    }

});