import users from "./data";

async function getData() {
  const resultConvert = await fetch(users)
    .then((response) => response.json())
    .catch((err) => {
      console.error(err.message);
    });

  console.log(resultConvert);
}

getData();
