//Each page html
import { homePage, aboutPage, storePage, contactPage } from "./pages.js";

// Contact form model functions
const validateContactForm = (formData) => {
	const errors = [];

	// Name validation
	if (!formData.name || formData.name.trim().length < 2) {
		errors.push("Name must be at least 2 characters long");
	}

	// Email validation
	if (!formData.email || !isValidEmail(formData.email)) {
		errors.push("Please enter a valid email address");
	}

	// Subject validation
	if (!formData.subject) {
		errors.push("Please select a subject");
	}

	// Message validation
	if (!formData.message || formData.message.trim().length < 10) {
		errors.push("Message must be at least 10 characters long");
	}

	return errors;
};

const isValidEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

const submitContactForm = (formData) => {
	// Validate form data
	const errors = validateContactForm(formData);

	if (errors.length > 0) {
		return {
			success: false,
			errors: errors,
		};
	}

	// Simulate form submission (in real app, this would make an API call)
	console.log("Contact form submitted:", formData);

	// Return success response
	return {
		success: true,
		message: `Thank you ${formData.name}! Your message has been sent. We'll get back to you soon at ${formData.email}.`,
	};
};

// Callback function to clean up IDs by removing dashes
const cleanId = (id, callback) => {
	const cleanedId = id.split("-")[0];
	callback(cleanedId);
};

const changePage = (pageName) => {
	let navId = pageName + "Page";
	$("#app").html(eval(navId));

	// Remove active class from all nav links
	$("nav a").removeClass("active");

	// Add active class to current nav link
	$(`nav a#${pageName}`).addClass("active");

	// Replace feather icons after page content changes
	if (typeof feather !== "undefined") {
		setTimeout(() => {
			feather.replace();
		}, 100);
	}
};

export { changePage, cleanId, validateContactForm, submitContactForm };
