// CONTROLLER: Manages user interactions and application flow
import { landingModel, pageModel } from "../model/model.js";

// Landing View Controller
class LandingController {
	constructor() {
		this.$landingOverlay = $("#landing-overlay");
	}

	init() {
		console.log("Landing overlay found:", this.$landingOverlay.length > 0);

		// Check if we're on first visit page (empty hash)
		const hashTag = window.location.hash;
		const pageName = hashTag.replace("#", "");
		const isFirstPage = pageName === "";

		if (this.$landingOverlay.length && isFirstPage) {
			console.log("Showing landing overlay");
			this.showLanding();
			this.setupInteractions();
		} else {
			console.log("Not on home page, hiding landing");
			// Don't show landing for other pages
		}
	}

	showLanding() {
		landingModel.setVisible(true);
		this.$landingOverlay.addClass("show");
	}

	async hideLanding() {
		if (landingModel.getVisible()) {
			landingModel.setVisible(false);

			// Remove show class for CSS transition
			this.$landingOverlay.removeClass("show");

			// Remove element after transition completes
			setTimeout(() => {
				this.$landingOverlay.remove();
			}, 1000);

			// Load home content after landing starts fading
			try {
				const result = await pageModel.changePage("");
				if (result.success) {
					$("#app").html(result.content);
				} else {
					console.error("Failed to load home page:", result.error);
				}
			} catch (error) {
				console.error("Error loading home page:", error);
			}
		}
	}

	setupInteractions() {
		// Auto-hide after 3 seconds
		setTimeout(() => {
			this.hideLanding();
		}, 3000);

		// Click to skip
		this.$landingOverlay.on("click", () => {
			this.hideLanding();
		});
	}
}

// Main App Controller
class AppController {
	constructor() {
		this.landingController = new LandingController();
	}

	init() {
		this.landingController.init();
		this.initRouting();
		this.initListeners();
	}

	initRouting() {
		$(window).on("hashchange", () => this.route());
		this.route();
	}

	async route() {
		const hashTag = window.location.hash;
		const pageName = hashTag.replace("#", "");
		// Only load page if landing is not visible or we're navigating away from home
		if (!landingModel.getVisible() || pageName !== "") {
			try {
				const result = await pageModel.changePage(pageName);

				// Controller updates the view based on Model data
				if (result.success) {
					$("#app").html(result.content);
				} else {
					$("#app").html("<h1>Page Not Found</h1><p>Sorry, the requested page could not be found.</p>");
				}
			} catch (error) {
				console.error("Error during routing:", error);
				$("#app").html("<h1>Error</h1><p>An error occurred while loading the page.</p>");
			}
		}
	}

	initListeners() {
		// Add additional event listeners here
	}
}

// Initialize app when document ready
$(document).ready(() => {
	const app = new AppController();
	app.init();
});
