window.onload = () =>{
      fetch("db/db.json")
      .then(response => {
        response.json().then((data) => {
           // store data in localStorage
          const myJSON = JSON.stringify(data);
          localStorage.setItem("testJSON", myJSON);
        });
      })
       .catch(err => {
        console.log(err);
      });
  
       // get date from localStorage
  let text = localStorage.getItem("testJSON");
  array = JSON.parse(text);

       // create DOM elements
      let article_wrapper =document.getElementById("art_wrp");
      
       for (let i = 0; i < array.length; i++){
          let art_item = document.createElement("div");
           let art_main_img = document.createElement("img");
          let art_timelime_wrp = document.createElement("div");
          let art_title = document.createElement("div");
          
           let art_descr = document.createElement("div");
          let art_img_wrp = document.createElement("div");
          let art_img = document.createElement("img");
           let art_timelime_date = document.createElement("div");
   
   
           // add IDs and classes to elements
           if (array.length-i === 1 ){
               art_timelime_wrp.classList.add("last_article")
           }
   
           art_item.setAttribute("class", "art_item");
           art_main_img.setAttribute("class", "art_main_img");
           art_main_img.setAttribute("alt", "art_main_img_" + i.toString() );
           art_title.setAttribute("class", "art_title");
           art_descr.setAttribute("class", "art_descr");
           art_img_wrp.setAttribute("class", "art_img_wrp");
           art_img.setAttribute("class", "art_img");
           art_img.setAttribute("alt", "art_img_" + i.toString() );
           art_timelime_date.setAttribute("class", "art_timelime_date");
           art_timelime_wrp.classList.add("art_timelime_wrp");
   
   
           // add Content to elemetss
           art_main_img.setAttribute("src", "img/" + array[i].img);
           let img_num = i;
           if(i===0){img_num = 2}
           art_img.setAttribute("src", "img/" + array[img_num].img);
           art_img_wrp.innerHTML = "<div class='art_icon_wrp'><a href='#'> <i class='fa fa-caret-right' aria-hidden='true'></i></a></div>";
           art_title.innerHTML = array[i].title;
           art_descr.innerHTML = array[i].description;
           let day =   "<span class='date_day'>"   + array[i].date.slice(0, -3) + "</span>";
          let month = "<span class='date_month'>" + array[i].date.slice(-3)    + "</span>";
          art_timelime_date.innerHTML = day+month;
           
           // put all child elements to article items
          art_timelime_wrp.appendChild(art_timelime_date);
          art_img_wrp.appendChild(art_img);
           art_item.appendChild(art_main_img);
           art_item.appendChild(art_timelime_wrp);
           art_item.appendChild(art_title);
           art_item.appendChild(art_descr);
           art_item.appendChild(art_img_wrp);
   
           article_wrapper.appendChild(art_item);
       }
   }
