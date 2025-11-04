/* Mobile nav toggling implemented with jQuery
	 - toggles `.open` on the <header> when hamburger clicked
	 - closes the mobile menu when a link inside `.mobile-menu` is clicked
	 
*/
// CONTROLLER: Manages user interactions and application flow
import { pageModel, loginModel, signupModel, createAlert, createToast } from "../model/model.js";

// Main App Controller
class AppController {
	constructor() {}

	init() {
		this.initRouting();
		this.initNavigation();
		this.initMobileNav();
	}

	// Initialize navigation interactions
	initNavigation() {
		// Update active nav link based on current hash
		$(window).on("hashchange", () => {
			const hash = window.location.hash || "#home";
			$(".nav-links a").removeClass("active");
			$(".nav-actions a").removeClass("active");
			$(`.nav-links a[href="${hash}"]`).addClass("active");
			$(`.nav-actions a[href="${hash}"]`).addClass("active");
		});

		// Set initial active link
		const initialHash = window.location.hash || "#home";
		$(`.nav-links a[href="${initialHash}"]`).addClass("active");
	}
	initMobileNav() {
		var $header = $("header");
		var $hamburger = $(".hamburger-icon");

		function toggleMenu() {
			$header.toggleClass("open");
		}

		// click or Enter/Space on the hamburger toggles the menu
		$hamburger.on("click", function (e) {
			e.preventDefault();
			toggleMenu();
		});

		// close mobile menu when a link is selected
		$(document).on("click", ".mobile-menu a", function () {
			$header.removeClass("open");
		});
	}

	initRouting() {
		$(window).on("hashchange", () => this.route());
		this.route();
	}

	async route() {
		const hashTag = window.location.hash;
		const pageName = hashTag.replace("#", "");
		try {
			const result = await pageModel.changePage(pageName);
			// Controller updates the view based on Model data
			if (result.success) {
				$("#app").html(result.content);
				// Initialize page-specific listeners after content loads
				this.initPageListeners(pageName);
			} else {
				const lastPage = pageModel.getLastLoadedPage();
				createAlert({
					type: "404",
					title: "404 - Page Not Found",
					message: "The page you're looking for doesn't exist.",
					confirmText: "Go Home",
					cancelText: "Go Back",
					onCancel: () => {
						window.location.hash = `#${lastPage}`;
					},
				});
			}
		} catch (error) {
			console.error("Error during routing:", error);
			const lastPage = pageModel.getLastLoadedPage();
			createAlert({
				type: "404",
				title: "404 - Page Not Found",
				message: "The page you're looking for doesn't exist.",
				confirmText: "Go Home",
				cancelText: "Go Back",
				onCancel: () => {
					window.location.hash = `#${lastPage}`;
				},
			});
		}
	}

	// Initialize listeners based on the current page
	initPageListeners(pageName) {
		switch (pageName) {
			case "login":
				this.initLoginListeners();
				break;
			case "signup":
				this.initSignupListeners();
				break;
			default:
				break;
		}
	}

	// Login page listeners
	initLoginListeners() {
		const $form = $("#loginForm");
		const $togglePassword = $(".toggle-password");

		// Form submission
		$form.on("submit", async (e) => {
			e.preventDefault();

			const username = $("#loginUsername").val().trim();
			const password = $("#loginPassword").val();

			try {
				// Disable submit button during processing
				const $submitBtn = $form.find('button[type="submit"]');
				$submitBtn.prop("disabled", true).text("Signing in...");

				const result = await loginModel.login(username, password);

				if (result.success) {
					createToast({ message: `Welcome back, ${result.user.username}!` });
					// Redirect to home or dashboard
					setTimeout(() => {
						window.location.hash = "#home";
					}, 1000);
				} else {
					// Show custom alert modal for errors
					createAlert({ title: result.title || "Login Error", message: result.error });
					$submitBtn.prop("disabled", false).text("Sign In");
				}
			} catch (error) {
				console.error("Login error:", error);
				createAlert({ title: "Unexpected Error", message: "An unexpected error occurred. Please try again." });
				$form.find('button[type="submit"]').prop("disabled", false).text("Sign In");
			}
		});
	}

	// Signup page listeners (placeholder)
	initSignupListeners() {
		const $form = $("#signupForm");

		// Form submission
		$form.on("submit", async (e) => {
			e.preventDefault();

			const username = $("#signupUsername").val();
			const email = $("#signupEmail").val();
			const password = $("#signupPassword").val();
			const confirmPassword = $("#signupConfirmPassword").val();
			const agreeTerms = $("#agreeTerms").is(":checked");

			// Clear previous errors
			$(".form-error").text("");
			$(".form-input").removeClass("error");

			// Check terms agreement
			if (!agreeTerms) {
				createAlert({
					title: "Terms Required",
					message: "You must agree to the Terms & Conditions to create an account",
				});
				return;
			}

			try {
				// Disable submit button during processing
				const $submitBtn = $form.find('button[type="submit"]');
				$submitBtn.prop("disabled", true).text("Creating Account...");

				const result = await signupModel.signup(username, email, password, confirmPassword);

				if (result.success) {
					createToast({ message: `Welcome to SecureBank, ${result.user.username}!` });
					// Redirect to login or home
					setTimeout(() => {
						window.location.hash = "#login";
					}, 1500);
				} else {
					// Show validation error
					createAlert({ title: result.title, message: result.error });
					$submitBtn.prop("disabled", false).text("Create Account");

					// Highlight the field with error (basic implementation)
					if (result.title.toLowerCase().includes("username")) {
						$("#signupUsername").addClass("error");
						$("#signupUsernameError").text(result.error);
					} else if (result.title.toLowerCase().includes("email")) {
						$("#signupEmail").addClass("error");
						$("#signupEmailError").text(result.error);
					} else if (result.title.toLowerCase().includes("password")) {
						$("#signupPassword, #signupConfirmPassword").addClass("error");
						$("#signupPasswordError").text(result.error);
					}
				}
			} catch (error) {
				console.error("Signup error:", error);
				createAlert({ title: "Error", message: "An unexpected error occurred. Please try again." });
				$form.find('button[type="submit"]').prop("disabled", false).text("Create Account");
			}
		});

		// Real-time password match validation
		$("#signupConfirmPassword").on("input", function () {
			const password = $("#signupPassword").val();
			const confirmPassword = $(this).val();

			if (confirmPassword && password !== confirmPassword) {
				$(this).addClass("error");
				$("#signupConfirmPasswordError").text("Passwords do not match");
			} else {
				$(this).removeClass("error");
				$("#signupConfirmPasswordError").text("");
			}
		});

		// Clear error on input
		$(".form-input").on("input", function () {
			$(this).removeClass("error");
			const errorId = $(this).attr("id") + "Error";
			$(`#${errorId}`).text("");
		});
	}
}

// Initialize app when document ready
$(document).ready(() => {
	const app = new AppController();
	app.init();
});

$(function () {});
