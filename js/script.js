const title = document.querySelectorAll("[data-title]");
const text = document.querySelectorAll("[data-text]");
const titleArray = Array.from(title);
console.log(titleArray);

titleArray.forEach(item => {
  function listener(event) {
    event.preventDefault();
    titleArray.forEach((item) => {
      item.nextElementSibling.classList.remove("active");
    });
    item.nextElementSibling.classList.toggle("active");
    event.currentTarget.classList.toggle("active");
  }
  item.addEventListener("click", listener);
});
