var social_ntws = {
	"facebook": "facebook.com/",
	"twitter": "twitter.com/",
	"instagram": "instagram.com/",
	"github": "github.com/",
	"reddit": "reddit.com/user/",
	"linkedin": "linkedin.com/in/"
}

var openInNewTab = function(url, handle) {
	var link = "https://www." + url + handle;
	console.log(link);
  	var win = window.open(link, '_blank');
  	win.focus();
}


document.addEventListener('DOMContentLoaded', function() {
	var submit_btn = document.getElementById('submit')
	submit_btn.addEventListener('click', function() {
	var handle = document.getElementById('handle-input').value;

	if (handle.length != 0) {
		$("input[type=checkbox]:checked").each (function() {
		var social_ntw = $(this).val();
			openInNewTab(social_ntws[social_ntw], handle);
		});
	}
});
}, false);