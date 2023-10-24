window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("header").className = "scroll_event_Add_class";
	document.getElementById("logo_white").style.display = "block";
	document.getElementById("logo_black").style.display = "none";
	const changeTexts = document.querySelectorAll('.changeText');
	for (const change of changeTexts)
		change.style.color = "#000";

  } else {
    document.getElementById("header").className = "";
	document.getElementById("logo_white").style.display = "none";
	document.getElementById("logo_black").style.display = "block";
	const changeTexts = document.querySelectorAll('.changeText');

	for (const change of changeTexts)
		change.style.color = "#fff";
  }
}