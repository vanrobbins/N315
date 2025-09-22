import { changePage, cleanId, submitContactForm } from "../model/model.js";

const initFeatherIcons = () => {
	// Initialize feather icons after page loads
	if (typeof feather !== "undefined") {
		feather.replace();
	}

	// Re-replace icons when content changes
	$(document).on("DOMNodeInserted", function () {
		setTimeout(function () {
			if (typeof feather !== "undefined") {
				feather.replace();
			}
		}, 100);
	});
};

// Contact form controller functions
const handleContactFormSubmit = (e) => {
	e.preventDefault();

	// Get form data from the view
	const formData = getContactFormData();

	// Use model to process the form
	const result = submitContactForm(formData);

	// Update view based on result
	if (result.success) {
		showSuccessMessage(result.message);
		resetContactForm();
	} else {
		showErrorMessages(result.errors);
	}
};

const getContactFormData = () => {
	return {
		name: $("#name").val().trim(),
		email: $("#email").val().trim(),
		phone: $("#phone").val().trim(),
		subject: $("#subject").val(),
		message: $("#message").val().trim(),
	};
};

const showSuccessMessage = (message) => {
	alert(message);
};

const showErrorMessages = (errors) => {
	const errorMessage = "Please fix the following errors:\n\n" + errors.join("\n");
	alert(errorMessage);
};

const resetContactForm = () => {
	$("#contactForm")[0].reset();
};

const initListeners = () => {
	$("nav a").on("click", (e) => {
		e.preventDefault();
		let btnId = e.currentTarget.id;
		console.log(`Clicked on ${btnId}`);
		changePage(btnId);
	});
	$(document).on("click", ".cta-button", (e) => {
		e.preventDefault();
		cleanId(e.currentTarget.id, changePage);
	});

	// Contact form submission
	$(document).on("submit", "#contactForm", handleContactFormSubmit);
};

// Initialize home page and set active state
$(document).ready(() => {
	changePage("home");
	initListeners();
	initFeatherIcons();
});
