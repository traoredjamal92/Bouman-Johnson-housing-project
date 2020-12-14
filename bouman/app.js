//const ul = document.getElementById();

//fetch("https://davy-api.herokuapp.com/predict")
//.then((resp) => resp.json()) // Transform the data into json
//.then(function(data) {
  // Create and append the li's to the ul
  //s})
  document.getElementById("buttonAPI").addEventListener("click", function(){
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "http://cnos.herokuapp.com/predict"; // site that doesn’t send Access-Control-*
  fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
  .then(response => response.json())
  .then(contents => console.log(contents))
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  

  });