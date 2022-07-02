function ajax(src, callback) {
  fetch(src)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
}

function render(data) {
  const h1 = document.querySelector('h1')
  const h2 = document.querySelector('h2')
  const h3 = document.querySelector('h3')
  h1.textContent = `name:${data[0].name} price:${data[0].price} description:${data[0].description}`
  h2.textContent = `name:${data[1].name} price:${data[1].price} description:${data[1].description}`
  h3.textContent = `name:${data[2].name} price:${data[2].price} description:${data[2].description}`
}

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
); 