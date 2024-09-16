let slideContainer = document.querySelector(".slide-container");
let bullets = document.querySelector(".bullets");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let imgs = document.querySelectorAll(".slide-container > img");

console.log(imgs);

bullets.style.gridTemplateColumns = `repeat(${imgs.length}, 1fr)`;

for (let i = 0; i < imgs.length; i++) {
  let span = document.createElement("span");
  i == 0 ? span.classList.add("active") : "";
  bullets.append(span);
  span.textContent = i + 1;

  span.onclick = function () {
    localStorage.setItem("slide", this.textContent);
    bullets.querySelectorAll("span").forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
    imgs.forEach((e) => {
      e.classList.remove("active");
    });
    imgs[this.textContent - 1].classList.add("active");
    if (this.textContent == imgs.length) {
      next.classList.add("disabled");
      previous.classList.remove("disabled");
    } else if (this.textContent == 1) {
      previous.classList.add("disabled");
      next.classList.remove("disabled");
    } else {
      console.log("Reset");
      next.classList.remove("disabled");
      previous.classList.remove("disabled");
    }
  };
}
if (localStorage.getItem("slide") == null) {
  localStorage.setItem("slide", 1);
} else {
  console.log(localStorage.getItem("slide"));
  bullets.querySelectorAll("span")[localStorage.getItem("slide") - 1].click();
}

next.onclick = function () {
  document.querySelector(".bullets span.active").nextElementSibling.click();
};
previous.onclick = function () {
  document.querySelector(".bullets span.active").previousElementSibling.click();
};
