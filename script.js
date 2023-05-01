
// "More about me" button  (shows and hides text)

const btn = document.getElementById("more");
const text = document.getElementById("moreInfo");

let isTextVisible = false;

btn.addEventListener("click", function() {
  if (isTextVisible) {
    text.style.display = "none";
    isTextVisible = false;
  } else {
    text.style.display = "block";
    isTextVisible = true;
  }
});