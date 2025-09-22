const homePage = `
<div class="home-hero">
	<div class="hero-content">
		<h1>R Bikes</h1>
		<p>Premium bikes for urban adventures. Ride the streets with style and attitude.</p>
	</div>
</div>

<section id="homeLinks">
	<h2 class="section-title">Explore Our World</h2>
	<div class="links-grid">
		<div class="link-card">
			<h3>About Us</h3>
			<p>Discover our passion for creating exceptional bikes that define urban culture and street riding.</p>
			<a href="#" id="about-link" class="cta-button">Learn More</a>
		</div>
		<div class="link-card">
			<h3>Our Store</h3>
			<p>Browse our collection of premium bikes, accessories, and gear for the modern urban rider.</p>
			<a href="#" id="store-link" class="cta-button">Shop Now</a>
		</div>
		<div class="link-card">
			<h3>Get In Touch</h3>
			<p>Have questions? Want to customize your ride? Get in touch with our team of bike experts.</p>
			<a href="#" id="contact-link" class="cta-button">Contact Us</a>
		</div>
	</div>
</section>
`;

const aboutPage = `
<section id="aboutHero" class="about-hero">
	<div class="hero-content">
		<div class="hero-text">
			<h1>About R Bikes</h1>
			<p class="lead">Crafting premium urban bikes since 2025. Where passion meets precision.</p>
		</div>
	</div>
</section>

<section id="aboutMain" class="about-main">
	<div class="about-container">
		<div class="about-image">
			<img src="../images/f0164550-800px-wm.jpg" alt="Bike mechanic at work" />
		</div>
		<div class="about-text">
			<h2>Our Story</h2>
			<p>R Bikes was born from a simple belief: every rider deserves a bike that's as unique as their journey. Founded in the heart of the city, we've been handcrafting premium urban bicycles for riders who demand both style and performance.</p>
			
			<p>Our workshop is where art meets engineering. Each bike is meticulously assembled by skilled craftsmen who understand that a bicycle isn't just transportation—it's an extension of your personality, your freedom, your story.</p>
			
			<h3>What Sets Us Apart</h3>
			<ul class="features-list">
				<li><strong>Handcrafted Quality:</strong> Every bike is assembled with precision and care</li>
				<li><strong>Urban Focus:</strong> Designed specifically for city riding and street culture</li>
				<li><strong>Custom Options:</strong> Personalize your ride to match your style</li>
				<li><strong>Expert Service:</strong> Professional maintenance and repair services</li>
			</ul>
			
			<div class="cta-section">
				<a href="#" id="store-link" class="cta-button">Shop Our Collection</a>
				<a href="#" id="contact-link" class="cta-button secondary">Visit Our Shop</a>
			</div>
		</div>
	</div>
</section>

<section id="aboutValues" class="about-values">
	<div class="values-container">
		<h2>Our Values</h2>
		<div class="values-grid">
			<div class="value-card">
				<h3>Quality First</h3>
				<p>We use only the finest materials and components, ensuring every bike meets our exacting standards.</p>
			</div>
			<div class="value-card">
				<h3>Urban Culture</h3>
				<p>We understand city riding. Our bikes are built for the streets, the culture, and the community.</p>
			</div>
			<div class="value-card">
				<h3>Sustainability</h3>
				<p>Promoting eco-friendly transportation while supporting local craftsmanship and community.</p>
			</div>
		</div>
	</div>
</section>
`;
const storePage = `
<section id="storeHero" class="store-hero">
	<div class="hero-content">
		<h1>Our Store</h1>
		<p class="lead">Premium bikes, expert services, and quality gear for the urban rider.</p>
	</div>
</section>

<section id="storeBikes" class="store-section">
	<div class="store-container">
		<h2>Our Bikes</h2>
		<div class="products-grid">
			<div class="product-card">
				<div class="product-icon">
					<i data-feather="zap"></i>
				</div>
				<h3>Urban Speedster</h3>
				<p>Lightweight aluminum frame designed for quick city commutes and agile street riding.</p>
				<div class="price">$899</div>
			</div>
			<div class="product-card">
				<div class="product-icon">
					<i data-feather="shield"></i>
				</div>
				<h3>Street Cruiser</h3>
				<p>Robust steel frame with classic styling, perfect for leisurely rides through the city.</p>
				<div class="price">$1,299</div>
			</div>
			<div class="product-card">
				<div class="product-icon">
					<i data-feather="trending-up"></i>
				</div>
				<h3>Performance Pro</h3>
				<p>High-end carbon fiber build for serious riders who demand speed and precision.</p>
				<div class="price">$2,199</div>
			</div>
		</div>
	</div>
</section>

<section id="storeServices" class="store-section alt-bg">
	<div class="store-container">
		<h2>Our Services</h2>
		<div class="services-grid">
			<div class="service-card">
				<div class="service-icon">
					<i data-feather="settings"></i>
				</div>
				<h3>Bike Assembly</h3>
				<p>Professional assembly of your new bike with precision tuning and safety checks.</p>
			</div>
			<div class="service-card">
				<div class="service-icon">
					<i data-feather="tool"></i>
				</div>
				<h3>Repairs & Maintenance</h3>
				<p>Complete repair services from basic tune-ups to major overhauls by certified mechanics.</p>
			</div>
			<div class="service-card">
				<div class="service-icon">
					<i data-feather="edit-3"></i>
				</div>
				<h3>Custom Builds</h3>
				<p>Design your dream bike with custom components, colors, and specifications.</p>
			</div>
			<div class="service-card">
				<div class="service-icon">
					<i data-feather="refresh-cw"></i>
				</div>
				<h3>Bike Restoration</h3>
				<p>Breathe new life into vintage bikes with our expert restoration services.</p>
			</div>
			<div class="service-card">
				<div class="service-icon">
					<i data-feather="truck"></i>
				</div>
				<h3>Home Delivery</h3>
				<p>Convenient delivery and setup service for bikes and accessories within the city.</p>
			</div>
			<div class="service-card">
				<div class="service-icon">
					<i data-feather="users"></i>
				</div>
				<h3>Group Workshops</h3>
				<p>Learn basic maintenance skills in our hands-on workshop sessions.</p>
			</div>
		</div>
	</div>
</section>

<section id="storeAccessories" class="store-section">
	<div class="store-container">
		<h2>Accessories & Gear</h2>
		<div class="accessories-grid">
			<div class="accessory-card">
				<div class="accessory-icon">
					<i data-feather="shield-off"></i>
				</div>
				<h3>Safety Gear</h3>
				<p>Helmets, lights, and reflective gear to keep you safe on city streets.</p>
			</div>
			<div class="accessory-card">
				<div class="accessory-icon">
					<i data-feather="lock"></i>
				</div>
				<h3>Security</h3>
				<p>High-quality locks and security systems to protect your investment.</p>
			</div>
			<div class="accessory-card">
				<div class="accessory-icon">
					<i data-feather="package"></i>
				</div>
				<h3>Storage Solutions</h3>
				<p>Bags, baskets, and cargo accessories for carrying your daily essentials.</p>
			</div>
			<div class="accessory-card">
				<div class="accessory-icon">
					<i data-feather="maximize"></i>
				</div>
				<h3>Performance Upgrades</h3>
				<p>Premium components to enhance your bike's performance and comfort.</p>
			</div>
		</div>
	</div>
</section>
`;
const productPage = `<p>p<p>`;
const contactPage = `
<section id="contactHero" class="contact-hero">
	<div class="hero-content">
		<h1>Get In Touch</h1>
		<p class="lead">Ready to find your perfect ride? Have questions about our bikes or services? We're here to help.</p>
	</div>
</section>

<section id="contactMain" class="contact-main">
	<div class="contact-container">
		<div class="contact-info">
			<h2>Visit Our Shop</h2>
			<div class="info-card">
				<div class="info-icon">
					<i data-feather="map-pin"></i>
				</div>
				<div class="info-content">
					<h3>Location</h3>
					<p>123 Urban Street<br>Downtown District<br>City, State 12345</p>
				</div>
			</div>
			
			<div class="info-card">
				<div class="info-icon">
					<i data-feather="clock"></i>
				</div>
				<div class="info-content">
					<h3>Hours</h3>
					<p>Monday - Friday: 9:00 AM - 7:00 PM<br>Saturday: 9:00 AM - 6:00 PM<br>Sunday: 11:00 AM - 5:00 PM</p>
				</div>
			</div>
			
			<div class="info-card">
				<div class="info-icon">
					<i data-feather="phone"></i>
				</div>
				<div class="info-content">
					<h3>Phone</h3>
					<p>(555) 123-BIKE<br>(555) 123-2453</p>
				</div>
			</div>
			
			<div class="info-card">
				<div class="info-icon">
					<i data-feather="mail"></i>
				</div>
				<div class="info-content">
					<h3>Email</h3>
					<p>info@rbikes.com<br>support@rbikes.com</p>
				</div>
			</div>
		</div>
		
		<div class="contact-form">
			<h2>Send Us a Message</h2>
			<form id="contactForm">
				<div class="form-group">
					<label for="name">Name *</label>
					<input type="text" id="name" name="name" required>
				</div>
				
				<div class="form-group">
					<label for="email">Email *</label>
					<input type="email" id="email" name="email" required>
				</div>
				
				<div class="form-group">
					<label for="phone">Phone</label>
					<input type="tel" id="phone" name="phone">
				</div>
				
				<div class="form-group">
					<label for="subject">Subject *</label>
					<select id="subject" name="subject" required>
						<option value="">Select a topic</option>
						<option value="general">General Inquiry</option>
						<option value="bike-purchase">Bike Purchase</option>
						<option value="custom-build">Custom Build</option>
						<option value="repair">Repair Service</option>
						<option value="maintenance">Maintenance</option>
						<option value="warranty">Warranty</option>
						<option value="other">Other</option>
					</select>
				</div>
				
				<div class="form-group">
					<label for="message">Message *</label>
					<textarea id="message" name="message" rows="5" required placeholder="Tell us how we can help you..."></textarea>
				</div>
				
				<button type="submit" class="submit-btn">
					<i data-feather="send"></i>
					Send Message
				</button>
			</form>
		</div>
	</div>
</section>

<section id="contactServices" class="contact-services">
	<div class="services-container">
		<h2>How We Can Help</h2>
		<div class="help-grid">
			<div class="help-card">
				<div class="help-icon">
					<i data-feather="shopping-cart"></i>
				</div>
				<h3>Bike Sales</h3>
				<p>Find the perfect bike for your needs with expert guidance from our knowledgeable team.</p>
			</div>
			
			<div class="help-card">
				<div class="help-icon">
					<i data-feather="tool"></i>
				</div>
				<h3>Repairs & Service</h3>
				<p>Professional repair and maintenance services to keep your bike running smoothly.</p>
			</div>
			
			<div class="help-card">
				<div class="help-icon">
					<i data-feather="settings"></i>
				</div>
				<h3>Custom Builds</h3>
				<p>Design and build a custom bike tailored to your specific preferences and riding style.</p>
			</div>
			
			<div class="help-card">
				<div class="help-icon">
					<i data-feather="users"></i>
				</div>
				<h3>Consultations</h3>
				<p>Get expert advice on bike selection, fitting, and maintenance from our experienced staff.</p>
			</div>
		</div>
	</div>
</section>
`;
export { homePage, aboutPage, storePage, contactPage };
