const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
	e.preventDefault();
	
	const email = document.getElementById("email");
	const password = document.getElementById("password");

	const correctEmail = "user@example.com";
	const correctPassword = "password123";
	
	if (email.value == correctEmail && password.value == correctPassword) {
		Swal.fire({
			icon: "success",
			title: "Successful login!",
			text: "Successful login",
			confirmButtonColor: "#675dff"
		}).then(() => {
			window.location.href = "index.html";
		});
	}
	else{
		Swal.fire({
			icon: "error",
			title: "Error",
			text: "Incorrect email or password",
			confirmButtonColor: "#675dff"
		});
	}
});

const forgotPassword = document.getElementById("forgotPassword");
forgotPassword.addEventListener("click", onForgotPasswordClick);

function onForgotPasswordClick() {
	Swal.fire({
		icon: "question",
		html: "Username: user@example.com<br>Password: password123",
		confirmButtonColor: "#675dff"
	});
}



