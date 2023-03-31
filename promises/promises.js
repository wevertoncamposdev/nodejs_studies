const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((response) => {
  const result = response.json();
  result.then((data)=> {console.log(data[0].name)});
  console.log(`Resposta recebida: ${response.status}`);
});

console.log("Requisição iniciada…");