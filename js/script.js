if (!localStorage.getItem("testJSON")){
    loadJSON();
}else {
    let text = localStorage.getItem("testJSON");
    let arr = JSON.parse(text);
    createArticle(arr)   
  }
  
function loadJSON(){
      fetch("db/db.json")

      .then(response => {
        response.json()

      .then((data) => {
        // store data in localStorage
        const myJSON = JSON.stringify(data);
        localStorage.setItem("testJSON", myJSON);
        })
      })

      .catch(err => {
        console.log(err);
      });
}

function createArticle(array){

      let article_wrapper = document.getElementById("art_wrp");
      for (let i = 0; i < array.length; i++){

        let img_num = i;
        if(i===0){img_num = 2}

        let item = document.createElement("div");
        item.innerHTML = 
        `<div class="art_item">
            <img class="art_main_img" src= ${'img/' + array[i].img } alt=${i.toString()}>
            <div class= ${array.length-i === 1 ? "art_timelime_wrp": "art_timelime_wrp last_article" }>
                <div class="art_timelime_date">
                    <span class="date_day">   ${ array[i].date.slice(0, -3) }</span>
                    <span class="date_month"> ${ array[i].date.slice(-3) }</span>
                    </div>
            </div>
            <div class="art_title">${ array[i].title }</div>
            <div class="art_descr">${ array[i].description } </div>
            <div class="art_img_wrp">
                <div class="art_icon_wrp">
                    <a href="#"> 
                        <i class="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                </div>
                <img class="art_img" alt= ${"art_img_" + i.toString()} src= ${"img/"  + array[img_num].img}>
            </div>
        </div>`

        article_wrapper.appendChild(item);
      }
}
