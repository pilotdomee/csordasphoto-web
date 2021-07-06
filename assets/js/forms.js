function stoppedTyping(){
	if(document.forms["getincontact"]["message"].value.length > 0
		&& document.forms["getincontact"]["name"].value.length > 0
		&& document.forms["getincontact"]["email"].value.length > 0) { 
		document.getElementById('submit_button').disabled = false; 
	} else { 
		document.getElementById('submit_button').disabled = true;
	}
}

function verify()
{
	form=document.getElementById('getincontact');
	var hidden=document.forms["getincontact"]["surname"].value;
	if(hidden!=""){
		form.action="error.php";
	} else {
		form.action="https://formspree.io/f/mqkgrwzq";  // page to submit your form
	}
}