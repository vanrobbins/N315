import { createToast, jQCreateAlert, createAlert } from "../lib/util.js";
function initListeners() {
	$("form button").on("click", (e) => {
		e.preventDefault();
		console.log("button clicked");
		const un = $("#username").val().trim();
		const com = $("#comments").val().trim();
		let unl = un.length;
		if (un === "") {
			jQCreateAlert({ title: "Username empty", message: `Username must be greater than 7 characters` });
		} else if (unl < 8) {
			jQCreateAlert({ title: "Error Username Length", message: `Username must be greater than 7 characters` });
		} else if (unl > 16) {
			jQCreateAlert({ title: "Error Username Length", message: `Username must be less than 16 characters` });
		} else if (un.includes(" ")) {
			jQCreateAlert({ title: "Error Username Spaces", message: `Username cannot contain spaces` });
		} else if (com === "") {
			jQCreateAlert({ title: "Comment empty", message: `Comment is required` });
		} else {
			jQCreateAlert({
				type: `Caution`,
				title: `Welcome!`,
				userName: `${un}`,
				message: `This is a string`,
				cancelText: `Cancel`,
				confirmText: `Submit`,
			});
		}
	});
}

$(document).ready(() => {
	initListeners();
});
