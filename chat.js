const form = document.getElementById("myForm")
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event)
})