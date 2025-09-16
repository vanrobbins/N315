import { changePage, loadData } from "../model/model.js";
function initListeners() {
	$("nav a").on("click", (e) => {
		e.preventDefault();
		let btnId = e.currentTarget.id;
		console.log(`Clicked on ${btnId}`);
		changePage(btnId);
	});
	$("#loadDataBtn").on("click", (e) => {
		loadData("Todd", myReturnedData);
	});
}
function myReturnedData(data) {
	console.log("Data Loaded " + data);
}
//$(changePage("home"));
$(initListeners);
