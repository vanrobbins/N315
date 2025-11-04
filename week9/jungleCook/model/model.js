// MODEL: Manages application state and data

import { createAlert, createToast } from "../lib/util.js";

class PageModel {
	constructor() {
		this.currentPage = "";
		this.lastLoadedPage = "home";
	}

	setCurrentPage(pageID) {
		this.currentPage = pageID;
	}

	getCurrentPage() {
		return this.currentPage;
	}

	getLastLoadedPage() {
		return this.lastLoadedPage;
	}

	setLastLoadedPage(pageID) {
		this.lastLoadedPage = pageID;
	}

	// Load page content
	async loadPageContent(pageID) {
		try {
			const pageName = pageID === "" ? "home" : pageID;
			const data = await $.get(`./pages/${pageName}.html`);
			return data;
		} catch (error) {
			console.error(`Error loading ${pageID || "home"} page:`, error);
			throw error;
		}
	}
	async changePage(pageID) {
		console.log(`Changing to page ${pageID}`);

		try {
			// Load page content - MODEL only handles data
			this.setCurrentPage(pageID);
			const content = await this.loadPageContent(pageID);

			// Track last successfully loaded page
			this.setLastLoadedPage(pageID || "home");

			// Return data to controller - no DOM manipulation in model
			return {
				success: true,
				content: content,
				pageID: pageID,
			};
		} catch (error) {
			return {
				success: false,
				error: error.message,
				pageID: pageID,
			};
		}
	}
}

// Export model instances
const pageModel = new PageModel();

export { pageModel };

// Re-export helpers from lib so other modules can import them via model
export { createAlert, createToast };

// Authentication Models
export class LoginModel {
	constructor() {
		this.username = "";
		this.password = "";
		this.isLoggedIn = false;
		this.currentUser = null;
	}

	setUsername(username) {
		this.username = username;
	}

	setPassword(password) {
		this.password = password;
	}

	getUsername() {
		return this.username;
	}

	isAuthenticated() {
		return this.isLoggedIn;
	}

	getCurrentUser() {
		return this.currentUser;
	}

	// Validate login credentials
	validateCredentials() {
		const usernameResult = validateUsername(this.username);
		if (!usernameResult.valid) {
			return usernameResult;
		}

		const passwordResult = validatePassword(this.password);
		if (!passwordResult.valid) {
			return passwordResult;
		}

		return { valid: true };
	}

	// Perform login action (in real app, would call API)
	async login(username, password) {
		this.setUsername(username);
		this.setPassword(password);

		const validation = this.validateCredentials();
		if (!validation.valid) {
			return {
				success: false,
				error: validation.message,
				title: validation.title,
			};
		}
		this.isLoggedIn = true;
		this.currentUser = { username: this.username };

		return {
			success: true,
			user: this.currentUser,
		};
	}
}

export class SignupModel {
	constructor() {
		this.username = "";
		this.email = "";
		this.password = "";
		this.confirmPassword = "";
	}

	setUsername(username) {
		this.username = username;
	}

	setEmail(email) {
		this.email = email;
	}

	setPassword(password) {
		this.password = password;
	}

	setConfirmPassword(confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	// Validate all signup fields
	validateSignupData() {
		const usernameResult = validateUsername(this.username);
		if (!usernameResult.valid) {
			return usernameResult;
		}

		const emailResult = validateEmail(this.email);
		if (!emailResult.valid) {
			return emailResult;
		}

		const passwordResult = validatePassword(this.password);
		if (!passwordResult.valid) {
			return passwordResult;
		}

		// Check password confirmation
		if (this.password !== this.confirmPassword) {
			return {
				valid: false,
				title: "Password Mismatch",
				message: "Passwords do not match",
			};
		}

		return { valid: true };
	}

	// Perform signup action (in real app, would call API)
	async signup(username, email, password, confirmPassword) {
		this.setUsername(username);
		this.setEmail(email);
		this.setPassword(password);
		this.setConfirmPassword(confirmPassword);

		const validation = this.validateSignupData();
		if (!validation.valid) {
			return {
				success: false,
				error: validation.message,
				title: validation.title,
			};
		}

		return {
			success: true,
			user: {
				username: this.username,
				email: this.email,
			},
		};
	}

	// Clear form data
	reset() {
		this.username = "";
		this.email = "";
		this.password = "";
		this.confirmPassword = "";
	}
}

// Export model instances
const loginModel = new LoginModel();
const signupModel = new SignupModel();

export { loginModel, signupModel };

// Validation helpers (used by models and controllers)
export function validateUsername(username) {
	const un = (username || "").trim();
	const len = un.length;

	if (un === "") {
		return { valid: false, title: "Username empty", message: "Username must be greater than 7 characters" };
	}
	if (len < 8) {
		return { valid: false, title: "Error Username Length", message: "Username must be greater than 7 characters" };
	}
	if (len > 16) {
		return { valid: false, title: "Error Username Length", message: "Username must be less than 16 characters" };
	}
	if (un.includes(" ")) {
		return { valid: false, title: "Error Username Spaces", message: "Username cannot contain spaces" };
	}

	return { valid: true };
}

export function validateEmail(email) {
	const em = (email || "").trim();

	if (em === "") {
		return { valid: false, title: "Email empty", message: "Email is required" };
	}

	// Simple email regex pattern
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(em)) {
		return { valid: false, title: "Invalid Email", message: "Please enter a valid email address" };
	}

	return { valid: true };
}

export function validatePassword(password) {
	const pw = password || "";
	const len = pw.length;

	if (pw === "") {
		return { valid: false, title: "Password empty", message: "Password is required" };
	}
	if (len < 8) {
		return { valid: false, title: "Password too short", message: "Password must be at least 8 characters" };
	}
	if (len > 32) {
		return { valid: false, title: "Password too long", message: "Password must be less than 32 characters" };
	}

	// Check for at least one number
	if (!/\d/.test(pw)) {
		return { valid: false, title: "Password weak", message: "Password must contain at least one number" };
	}

	return { valid: true };
}
