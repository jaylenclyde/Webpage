function logi(){
	var email = container.password.value;
	var password = container.email.value;
	var scndpwd = container.passwordrpt.value;
	var bodytext = ("You've submitted your form\nEmail:" + email + "\nPassword:" + password);
	var err = ("Passwords are not the same");
	if (password = scndpwd){
		alert(bodytext);
		window.open("home.html");
	} else {
		alert(err);
	}
}