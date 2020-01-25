

//run the embed function when the button is clicked
$("#mybutton").click(embed);


// function when user presses the button
function embed() {

	var url = document.getElementById('url').value 

	// if the user inputs the full youtube url
	if (url.includes("&")) {
		var url_split = url.split("&");

		var true_url = url_split[0];

		var url_section = true_url.split(/=(.+)/)[1];

		var link = "https://www.youtube.com/embed/" + url_section;
    
		document.getElementById('myframe').src = link;
	} 

	else if (url.includes("=")) {
		var url_section = url.split(/=(.+)/)[1];

		var link = "https://www.youtube.com/embed/" + url_section;
    
		document.getElementById('myframe').src = link;
	} 

	// if the user inputs the shotcut youtube url
	else if (!(url.includes("="))) {
		var urlSections = url.split("/");
				
		var urlEnd = urlSections[urlSections.length - 1];
	
		var link = "https://www.youtube.com/embed/" + urlEnd;

   
		document.getElementById('myframe').src = link;
	}
}



// prevent the form from refreshing the page when it submits anything 
// we're stopping the default action
$('form').submit(function (event) {
    event.preventDefault();
});


// when user presses enter in the form, run the function
$("input").on("keypress", function(event) {
	if (event.keyCode === 13) {  //checks whether the pressed key is "Enter"
		var url_in_form = (event.delegateTarget.value); // get the url in the form
		embed2(url_in_form)
    }
})


// function that runs when user presses enter in the form
function embed2(x) {

	// if the user inputs the full youtube url
	if (x.includes("&")) {
		var url_split = x.split("&");

		var true_url = url_split[0];

		var url_section = true_url.split(/=(.+)/)[1];

		var link = "https://www.youtube.com/embed/" + url_section;
    
		document.getElementById('myframe').src = link;
	} 

	else if (x.includes("=")) {
		var url = " " + x ;

		var url_section = url.split(/=(.+)/)[1]; //only want the part of the url that comes after the "="

		var link = "https://www.youtube.com/embed/" + url_section;
    
		document.getElementById('myframe').src = link;	
	} 

	// if the user inputs the shortcut youtube url
	else if (!(x.includes("="))) {

		var urlSections = x.split("/");
				
		var urlEnd = urlSections[urlSections.length - 1];
	
		var link = "https://www.youtube.com/embed/" + urlEnd;

		document.getElementById('myframe').src = link;
	}
	
}


 



