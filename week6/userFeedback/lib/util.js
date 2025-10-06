export function createToast(toastObj) {
	const toastDiv = document.createElement("div");
	const message = document.createElement("p");
	toastDiv.className = "toast";
	message.innerText = toastObj.message;
	toastDiv.appendChild(message);
	document.body.appendChild(toastDiv);
	requestAnimationFrame(() => toastDiv.classList.add("show"));
	setTimeout(() => {
		toastDiv.classList.remove("show");
		toastDiv.classList.add("hide");
		setTimeout(() => {
			document.body.removeChild(toastDiv);
		}, 500);
	}, 3000);
}
export function createAlert(alertObj) {
	//Items
	const alertDiv = document.createElement("div");
	const alert = document.createElement("div");
	const btnBar = document.createElement("div");
	const cancelBtn = document.createElement("div");
	const confirmBtn = document.createElement("div");
	const message = document.createElement("p");
	const title = document.createElement("h1");
	const x = document.createElement("span");
	//Assignments
	alertDiv.className = "alert-holder";
	alert.className = "alert-callout";
	x.className = "x-close-alert";
	btnBar.className = "button-bar";
	confirmBtn.className = "btn confirm";
	cancelBtn.className = "btn cancel";
	//Modifiers
	title.innerText = alertObj.title || "Title";
	message.innerText = alertObj.message;
	confirmBtn.innerText = "Confirm";
	cancelBtn.innerText = "Cancel";
	//Add elements
	btnBar.appendChild(confirmBtn);
	btnBar.appendChild(cancelBtn);
	alert.appendChild(title);
	alert.appendChild(message);
	alert.appendChild(btnBar);
	alertDiv.appendChild(alert);
	document.body.appendChild(alertDiv);
	//Add actions
	alertDiv.addEventListener("click", () => {
		document.body.removeChild(alertDiv);
	});
	cancelBtn.addEventListener("click", () => {
		document.body.removeChild(alertDiv);
	});
	confirmBtn.addEventListener("click", () => {
		document.body.removeChild(alertDiv);
	});
}

{
	/* <div id="alert-holder">
	<div class="alert-callout">
		<h1 class="alert-title">alert title</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio asperiores, excepturi dolores
			exercitationem nostrum itaque, doloribus, sed consequuntur provident dolorum cupiditate facilis at! Similique
			quibusdam excepturi deleniti unde perspiciatis.
		</p>
		<span class="x-close-alert">X</span>
		<div class="button-bar">
			{" "}
			<div class="btn confirm">Confirm</div> <div class="btn cancel">Cancel</div>
		</div>
	</div>
</div>; */
}
