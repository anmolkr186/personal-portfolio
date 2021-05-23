filterSelection("all");
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
        // x[i].style.display = "block";
        x[i].style.display = 'none';
		// w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) x[i].style.display = "block";
	}
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className	.replace("active","");
		this.className += " active";
	});
}


function work_redirect(){
	window.location.href= "index.html";
	var el = document.getElementById("work");
	el.onclick = scrolling;
}


function scrolling() {
	var elmnt = document.getElementById("work");
	elmnt.scrollIntoView();
}