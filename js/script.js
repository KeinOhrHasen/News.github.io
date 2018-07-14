//  download the JSON file
window.onload = () =>{
    // fetch("https://api.myjson.com/bins/140vry")
//     fetch("db/db.json")
       fetch("https://keinohrhasen.github.io/News.github.io/db/db.json")

    
    .then(response => {
      response.json().then(data => {
  
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

// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         // console.log(this.responseText)

//     //    document.getElementById("demo").innerHTML = this.responseText;
//       }
//     };
//     xhttp.open("file:///", "../db/db.json", true);
//     console.log(xhttp)
//   }

//   loadDoc();

// function load() {
//     fetch('../db/db.json')
//       .then(r => r.json()
//     //   console.log(r))
//       .then(json => {
//         this.db = json
//         console.log(json);


//       }))}

// load()

// var json = require("./db/db");
// let obj = JSON.parse(json);
// console.log(obj);

// var client = new XMLHttpRequest();
// client.open('GET', '../db/db.json');
// client.onreadystatechange = function() {
//     console.log(client)
//   alert(client.responseText);
// }()

// function FileHelper()

// {
//     FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
//     {
//         var request = new XMLHttpRequest();
//         request.open("GET", pathOfFileToReadFrom, false);
//         request.send(null);
//         var returnValue = request.responseText;

//         return returnValue;
//     }
// }


// var text = FileHelper.readStringFromFileAtPath ( "../db/db.json" );

// fetch('../db/db.json')
//   .then(response => response.json())
//   .then(jsonResponse => console.log(jsonResponse))     
//    // outputs a javascript object from the parsed json


// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }

// readTextFile('../db/db.json')
