const url = "https://dummyjson.com/users/2";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const { id, firstName, age } = data;
    console.log({
      id,
      firstName,
      age,
    });
  })
  .catch((err) => console.log("Erro ao buscar dados", err));

/* -------------------------------- */
const data = {
  title: "Algum title",
  content: "Algum conteúdo",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(data),
});
