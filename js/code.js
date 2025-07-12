const btn = document.querySelector("#button");


btn.addEventListener("click", function (e) {
  console.log(e);
  alert("Button clicked!");
  alert("Event type: " + e.type);
  alert("Event target: " + e.target.tagName);
});