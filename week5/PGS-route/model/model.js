// MODEL: Manages application state and data
class LandingModel {
	constructor() {
		this.isVisible = false;
	}

	setVisible(visible) {
		this.isVisible = visible;
	}

	getVisible() {
		return this.isVisible;
	}
}

class PageModel {
	constructor() {
		this.currentPage = "";
	}

	setCurrentPage(pageID) {
		this.currentPage = pageID;
	}

	getCurrentPage() {
		return this.currentPage;
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
const landingModel = new LandingModel();
const pageModel = new PageModel();

export { landingModel, pageModel };
