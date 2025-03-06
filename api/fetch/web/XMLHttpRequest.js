function reqlistener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqlistener);
req.open("GET", "https://dummyjson.com/users");
req.send();
