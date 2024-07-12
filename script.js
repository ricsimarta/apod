const API_KEY = "htOZcKgByUy0shR0h1lpz2nQ40krVtgvef7Pegcs";

const fetchApod = () => fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then(response => response.json());

const apodComponent = (title, imgUrl, date, explanation) => `
  <div class="apod">
    <h2>${title}</h2>
    <img src=${imgUrl} />
    <input type="date" value=${date} min="1995-06-16" max=${date} onkeydown="return false"/>
    <p class="explanation">${explanation}</p>
  </div>
`;

const makeDomFromData = (data, rootElement, component) => {
  rootElement.insertAdjacentHTML("beforeend", component(data.title, data.hdurl, data.date, data.explanation));
}

const init = () => {
  fetchApod()
    .then(data => {
      // console.log(data);

      makeDomFromData(data, document.querySelector("#root"), apodComponent);
      const inputElement = document.querySelector("input");
      inputElement.addEventListener("input", (event) => {
        // console.dir(inputElement.value);
        console.log(event.target.value);
      })
    })
}

init();