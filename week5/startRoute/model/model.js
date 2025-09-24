const changePage = (pageID) => {
	console.log(`Changing to page ${pageID}`);
	if (pageID === "") {
		$.get("pages/home.html", (data) => {
			console.log(data);
			$("#app").html(data);
		}).fail((error) => {
			Swal.fire({
				icon: "error",
				title: "404",
				text: "Error: Can not find home.html file",
			});
			console.error("Error Loading home page:", error);
		});
	} else {
		$.get("pages/" + pageID + ".html", (data) => {
			console.log(data);
			$("#app").html(data);
		}).fail((error) => {
			Swal.fire({
				icon: "error",
				title: `404: ${pageID}`,
				text: `Error: can not find ${pageID}.html`,
			});
			console.error("Error Loading " + pageID + " page:", error);
		});
	}
};
export { changePage };
