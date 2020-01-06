
// /main function

function embed() {
	var url = document.getElementById('url').value 

	var url_section = url.split(/=(.+)/)[1];

	var link = "https://www.youtube.com/embed/" + url_section;
    
	document.getElementById('myframe').src = link;

}

document.getElementById("mybutton").addEventListener("click", embed);




