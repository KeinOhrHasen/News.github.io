//  download the JSON file
window.onload = () =>{
    // fetch("https://api.myjson.com/bins/140vry")
//     fetch("db/db.json")
       fetch("https://keinohrhasen.github.io/News.github.io/db/db.json")

    
    .then(response => {
      response.json().then(data => {
        console.log(data);
        // store data in localStorage
        const myJSON = JSON.stringify(data);
        localStorage.setItem("testJSON", myJSON);
      });
    })
    .catch(err => {
      console.log(err);
    });


let text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
console.log(obj)
}
