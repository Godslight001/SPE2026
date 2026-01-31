const progressLink1 = document.getElementById("progress-link1");

progressLink1.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the default behavior of following the link
  alert("In progress..."); // display the pop-up message
});

const progressLink2 = document.getElementById("progress-link2");

progressLink2.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the default behavior of following the link
  alert("In progress..."); // display the pop-up message
});
