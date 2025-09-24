import { changePage } from "../model/model.js";
const initlisteners = () => {};

const route = () => {
	let hastTag = window.location.hash;
	let pageName = hastTag.replace("#", "");
	changePage(pageName);
};

function initRouting() {
	$(window).on("hashchange", route);
	route();
}
$(document).ready(() => {
	initRouting();
	initlisteners();
});
