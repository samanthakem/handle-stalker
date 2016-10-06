var social_ntws = {
	"facebook": "facebook.com/",
	"twitter": "twitter.com/",
	"instagram": "instagram.com/",
	"github": "github.com/",
	"reddit": "reddit.com/user/",
	"linkedin": "linkedin.com/in/"
}

// open the url in a new tab
var openInNewTab = function(url, handle) {
	var link = "https://www." + url + handle;
	console.log(link);
  	var win = window.open(link, '_blank');
  	win.focus();
}

// verify if user typed a handle and opens new tabs
var stalkHandle = function() {
	var handle = document.getElementById('handle-input').value;

	if (handle.length != 0) {
		$("input[type=checkbox]:checked").each (function() {
		var social_ntw = $(this).val();
			openInNewTab(social_ntws[social_ntw], handle);
		});
	}
};

document.addEventListener('DOMContentLoaded', function() {
	var submit_btn = document.getElementById('submit')
	var input = document.getElementById('handle-input')

	// verify handle once user pressed enter key
	input.addEventListener('keypress', function (e) {
		if (e.keyCode == 13) {
			stalkHandle();
		}
	});

	// verify handle once user clicks on submit button
	submit_btn.addEventListener('click', function() {
		stalkHandle();
	});
}, false);
