// CONTROLLER: Manages user interactions and application flow
import { pageModel, booksModel, loginModel, signupModel, blogModel, createAlert, createToast } from "../model/model.js";

// Main App Controller
class AppController {
	constructor() {}

	init() {
		this.initRouting();
		this.initNavigation();
		this.initTheme();
		this.initMobileNav();
	}

	// Initialize navigation interactions
	initNavigation() {
		// Update active nav link based on current hash
		$(window).on("hashchange", (e) => {
			const hash = window.location.hash || "#home";
			this.setActive(hash);
		});
		// Set initial active link
		const initialHash = window.location.hash || "#home";
		$(`#nav-links a[href="${initialHash}"]`).addClass("active");
		$(`.mobile-nav-content a[href="${initialHash}"]`).addClass("active");
	}
	setActive(pageID) {
		// Extract just the page name, ignore query parameters and # prefix
		const pageName = pageID.replace("#", "").split("?")[0];

		$(`#nav-links a`).removeClass("active");
		$(`#nav-links a[href="#${pageName}"]`).addClass("active");
		$(`.mobile-nav-content a`).removeClass("active");
		$(`.mobile-nav-content a[href="#${pageName}"]`).addClass("active");
	}
	initRouting() {
		$(window).on("hashchange", () => this.route());
		this.route();
	}
	initMobileNav() {
		const $mOverlay = $("#mobile-nav-overlay");
		const $mNav = $("#mobile-nav");
		const $hamburger = $("#nav-hamburger");
		const $close = $("#mobile-nav-close");
		$("#mobile-nav").removeClass("no-animate");
		const open = () => {
			$mNav.css("display", "flex");
			$mNav.removeClass("hidden").addClass("visible");
			$mOverlay.removeClass("hidden");
		};
		const close = () => {
			$mNav.removeClass("visible").addClass("hidden");
			$mOverlay.addClass("hidden");
			$mNav.css("display", "none");
		};
		// Open on hamburger click
		$(document).on("click", "#nav-hamburger", (e) => {
			e.preventDefault();
			open();
		});
		// Close on close button
		$(document).on("click", "#mobile-nav-close", (e) => {
			e.preventDefault();
			close();
		});
		// Close when clicking overlay background
		$(document).on("click", "#mobile-nav-overlay", function (e) {
			if (e.target === this) {
				close();
			}
		});

		// Close when clicking any mobile nav link
		$(document).on("click", "#mobile-nav .mobile-nav-link", () => {
			close();
		});
	}
	//Routing to get page
	async route() {
		const hashTag = window.location.hash;
		// Parse hash and query parameters
		const [pageHash, queryString] = hashTag.replace("#", "").split("?");
		const pageName = pageHash || "home";

		try {
			let result;
			// If blog page with post ID parameter
			if (pageName === "blog" && queryString) {
				result = await this.loadBlogDetailPage(queryString);
			} else {
				result = await pageModel.changePage(pageName);
			}

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

	// Load and display featured books on Home
	async initFeaturedHomeBooks() {
		try {
			const featuredBooks = await booksModel.getFeaturedHomeBooks();
			const container = $("#featured-books-container");

			if (!container.length) return;
			container.empty();
			featuredBooks.forEach((book) => {
				const bookCard = `
					<div class="book-card" data-book-id="${book.id}">
						<div class="book-cover">
						<img class="cover-img" src='${book.cover}'/>
						</div>
						<div class="book-description">
								<p>${book.description}</p>
						</div>
							<p class="book-price">$${book.price.toFixed(2)}</p>
						<button class="btn-add-cart">
								ADD TO CART</button>
						</div>
					</div>
				`;
				container.append(bookCard);
			});
		} catch (error) {
			console.error("Error loading featured books:", error);
		}
	}
	// Load books for books page by category
	async initBooksCategory() {
		const books = await booksModel.getBooksByCategory();
		const categories = Object.keys(books);
		const container = $("#books-container");
		// Render categories
		for (const key of categories) {
			// Sanitize genre name for use in HTML IDs (replace spaces with hyphens)
			const sanitizedKey = key.replace(/\s+/g, "-").toLowerCase();
			const categoryDiv = $(`<div class='category' id='${sanitizedKey}-container'>
				<h1>${key.charAt(0).toUpperCase() + key.slice(1)} Books</h1>
				<div class=book-grid id='${sanitizedKey}-books'></div>
			</div>`);
			for (const book of books[key]) {
				const bookCard = `<div class="cat-book-card" data-book-id="${book.id}">
						<div class="book-cover">
							<img src='${book.cover}' alt='invalid img'/>
						</div>
						<div class="book-info">
							<div class="book-description">
								<p>${book.description}</p>
							</div>
							<p class="book-price">$${book.price.toFixed(2)}</p>
							<button class="btn-add-cart">ADD TO CART</button>
						</div>
					</div>`;
				categoryDiv.find(`#${sanitizedKey}-books`).append(bookCard);
			}

			container.append(categoryDiv);
		}
	}
	// Load blog detail page with post content
	async loadBlogDetailPage(postId) {
		try {
			// First load the detail page template
			let templateContent = await $.get("./pages/blog-detail.html");

			// Get the post data
			const post = await blogModel.getPostById(parseInt(postId));
			if (!post) {
				return {
					success: false,
					error: "Post not found",
					pageID: "blog",
				};
			}

			// Generate the post content based on type
			let postContent;
			const overlayColor = getComputedStyle(document.documentElement).getPropertyValue("--color-hero-overlay").trim();
			switch (post.type) {
				case "normal":
					postContent = `
					<div class="blog-hero" style="background-image: linear-gradient(${overlayColor}, ${overlayColor}), url('../${
						post.heroImg
					}')">
							<h1>${post.title.toUpperCase()}</h1>
							<h4>${post.heroText}</h4>
						</div>
						<div class="blog-content">
							<img class="blog-detail-img" src="./${post.previewImg}" alt="${post.title}"/>
							<p class="blog-txt-content">${post.content}</p>
						</div>
					`;
					break;
				case "book-highlight":
					const highlightBooks = await booksModel.getBooksByIdArray(post.books);
					const bookImages = highlightBooks
						.map(
							(book) => `
							<div class="highlight-book" data-book-id="${book.id}">
								<img src="${book.cover}" alt="${book.title}"/>
								<div class="book-text" >
									<h1 class="">${book.title} By ${book.author}</h1>
									<p>${book.description}</p>
								</div>
							</div>
						`
						)
						.join("");
					postContent = `
					<div class="blog-hero" style="background-image: linear-gradient(${overlayColor}, ${overlayColor}), url('../${
						post.heroImg
					}')">
						<h1>${post.title.toUpperCase()}</h1>
						<h4>${post.heroText}</h4>
					</div>
						<div class="blog-content">
							<div class="blog-p-books">
							${bookImages}
							</div>
						</div>
					`;
					break;
				default:
					postContent = `<p>Unknown post type</p>`;
			}

			// Inject the post content into the template
			const $template = $(templateContent);
			$template.find(".blog-post-detail").html(postContent);
			pageModel.setCurrentPage("blog");
			pageModel.setLastLoadedPage("blog");

			return {
				success: true,
				content: $template.html(),
				pageID: "blog",
			};
		} catch (error) {
			console.error("Error loading blog detail page:", error);
			return {
				success: false,
				error: error.message,
				pageID: "blog",
			};
		}
	}
	//Load Blog posts for blog page
	async initBlog() {
		const posts = await blogModel.getAllPosts();
		console.log(posts);
		const $blog = $("#blog");
		let blogPost;
		for (const post of posts) {
			switch (post.type) {
				case "normal":
					blogPost = `
					<div class=blog-post data-post-id="${post.id}">
						<div class="blog-p-img" style="background-image: url('./${post.previewImg}')"></div>
						<div class="blog-preview">
							<h1>${post.title.toUpperCase()}</h1>
							<p>${post.description}</p>
							<button class="btn-read-more">READ MORE</button>
						</div>
					</div>`;

					break;
				case "book-highlight":
					const highlightBooks = await booksModel.getBooksByIdArray(post.books);
					blogPost = `
					
					<div class=blog-post data-post-id="${post.id}">
						<div class="blog-p-books">
							${highlightBooks
								.map((book) => `<div class="highlight-book"><img src="${book.cover}" alt="${book.title}"/></div>`)
								.join("")}
						</div>
						<div class="blog-preview">
							<h1>${post.title.toUpperCase()}</h1>
							<p>${post.description}</p>
							<button class="btn-read-more">READ MORE</button>
						</div>
					</div>`;
					break;
			}
			$blog.append(blogPost);
		}
		$(".btn-read-more").on("click", (e) => {
			const postId = $(e.target).closest(".blog-post").attr("data-post-id");
			window.location.hash = `#blog?${postId}`;
		});
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
	// Initialize listeners based on the current page
	initPageListeners(pageName) {
		switch (pageName) {
			case "home":
			case "":
				this.initFeaturedHomeBooks();
				break;
			case "books":
				this.initBooksCategory();
				break;
			case "blog":
				this.initBlog();
				break;
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
	// Blog page listeners
	initBlogListeners() {
		// Back to blog button
		$(document).on("click", ".btn-back-blog", () => {
			window.location.hash = "#blog";
		});
		// Click blog post cards to open detail
		$(document).on("click", ".blog-post", (e) => {
			const postId = $(e.currentTarget).data("post-id");
			if (postId) {
				window.location.hash = `#blog?${postId}`;
			}
		});
	}
	initTheme() {
		let theme = pageModel.getTheme();
		$(":root").addClass(theme + "-mode");
		$("#theme-changer").text((theme === "dark" ? "Light" : "Dark") + " Mode");
		$("#theme-changer").on("click", function () {
			let newTheme = theme === "dark" ? "light" : "dark";
			$(":root")
				.removeClass(theme + "-mode")
				.addClass(newTheme + "-mode");

			$("#theme-changer").text(theme.charAt(0).toUpperCase() + theme.slice(1) + " Mode");
			theme = newTheme;

			pageModel.setTheme(theme);
		});
	}
}

// Initialize app when document ready
$(document).ready(() => {
	const app = new AppController();
	app.init();
});
