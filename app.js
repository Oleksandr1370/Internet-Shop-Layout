// let title = document.getElementById("title");
// console.log(title);

// let text = document.getElementsByClassName("text");
// console.log(text);

// let li = document.getElementsByTagName("li");
// console.log(li);

// let text = document.querySelector(".text");
// console.log(text);

// let li = document.querySelectorAll("li");
// console.log(li);
// console.log(title.getAttribute("id"));
// console.log(title.getAttribute("class"));
// console.log(text.getAttribute("class"));

// let title = document.getElementById("title");
// console.log(title);

// let text = document.getElementsByClassName("text");
// console.log(text);

// let li = document.getElementsByTagName("li");
// console.log(li);

// let text = document.querySelector(".text");
// console.log(text);

// let li = document.querySelectorAll("li");
// console.log(li);

// 3.02.2023
// console.log(title.hasAttribute("class"));
// console.log(title.hasAttribute("id"));
// console.log(title.getAttribute("id"));
// console.log(title.getAttribute("class"));
// console.log(text.getAttribute("class"));
// title.setAttribute("name", "hello-name");
// title.removeAttribute("name");

// let h1 = document.createElement('h1');
// h1.textContent = "Hello h1";
// document.body.append (h1);
// h1.innerHTML = "<span> Hi Jack</span>";
// title.textContent = "Hello Ukraine";
// title.onclick = function () {
//   alert("Hello");
// };
// title.addEventListener("click", function (e) {
//   let target = e.target;
//   target.style.color = "white";
//   target.style.backgroundColor = "purple";
//   target.style.padding = "15px";
// });
// button.onclick = function () {
//     <img src="AlTorn.png">;
/
let image = document.querySelector("img");

document.querySelector("button").addEventListener("click", function () {
    let imgSrc = image.getAttribute("src");
    if (imgSrc === "logohere.png") {
        image.setAttribute("src", "AlTorn.png");
    } else {
        image.setAttribute("src","logohere.png");
    }
});