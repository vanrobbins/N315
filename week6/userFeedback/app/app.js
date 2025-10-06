import { createToast, createAlert } from "../lib/util.js";
function initListeners() {
	$("form button").on("click", (e) => {
		e.preventDefault();
		console.log("button clicked");
		const un = $("#username").val().trim();
		let unl = un.length;
		if (un === "") {
			createAlert({ title: "Username empty", message: `Username must be greater than 7 characters` });
		} else if (unl < 8) {
			createAlert({ title: "Error Username Length", message: `Username must be greater than 7 characters` });
		} else if (unl > 16) {
			createAlert({ title: "Error Username Length", message: `Username must be less than 16 characters` });
		} else if (un.includes(" ")) {
			createAlert({ title: "Error Username Spaces", message: `Username cannot contain spaces` });
		} else {
			createToast({ message: `Welcome, ${un}` });
		}
	});
}

$(document).ready(() => {
	initListeners();
});
