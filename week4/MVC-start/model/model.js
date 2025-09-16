const homePage = `<h1>Home Page</h1>`;
const aboutPage = `<h1>About Page</h1>`;
const contactPage = `<h1>Contact Us Page<h1>`;
const productsPage = `<h1>Products Page<h1>`;
function changePage(pageName) {
	let navId = pageName + "Page";
	$("#app").html(eval(navId));
}

function loadData(fName, callback) {
	let newName = fName + " Shelton";
	callback(newName);
}

//Function exports
export { changePage, loadData };
