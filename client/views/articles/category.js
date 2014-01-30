Template.category.helpers({
	fullUrl: function(){
		 var array = this.split("-");
		 var res = array[0].trim();

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

