const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const container = document.querySelector(".container");

const fetchData = (search) =>
  fetch(
    `https://api.rawg.io/api/games?key=14daa3a86817464fbf5c9783a02139d0&search=${search}`
  )
    .then((result) => result.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));

btn.addEventListener("click", () => {
  fetchData(input.value).then(({ results }) => {
    results.forEach((element) => {
      console.log(element);
      const newDiv = document.createElement("div");
      const background = document.createElement("img");
      const title = document.createElement("p");

      title.innerText = element.name;
      background.setAttribute("src", element.background_image);
      background.style.width = "100px";

      newDiv.appendChild(title);
      newDiv.appendChild(background);
      container.appendChild(newDiv);
    });
  });
});
