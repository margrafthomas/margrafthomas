let images = document.querySelectorAll(".gallery");
let getLatestedOpenImg;
let windowWidth = window.innerWidth;

if(images) {
    images.forEach(function(image, index){
      image.onclick = function() {

        getLatestedOpenImg = index + 1;
               
        let container = document.body;
        let newImgWindow = document.createElement("div");
        container.appendChild(newImgWindow);
        newImgWindow.setAttribute("class", "img-window");
        newImgWindow.setAttribute("onclick", "closeImg()");

        let newImg = document.createElement("img");
        newImgWindow.appendChild(newImg);
        newImg.setAttribute("src", this.src);
        newImg.setAttribute("id", "current-img");


        newImg.onload = function() {
          let imgWidth = this.width;
          let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

          let newNextBTN = document.createElement("a");
          let btnNextText = document.createTextNode("next");
          newNextBTN.appendChild(btnNextText); 
          container.appendChild(newNextBTN);
          newNextBTN.setAttribute("class", "img-btn-next");
          newNextBTN.setAttribute("onclick", "changeImg(1)");
          newNextBTN.style.cssText = "right: " + calcImgToEdge + "px;";

          let newPrevBTN = document.createElement("a");
          let btnPrevText = document.createTextNode("prev");
          newPrevBTN.appendChild(btnPrevText); 
          container.appendChild(newPrevBTN);
          newPrevBTN.setAttribute("class", "img-btn-prev");
          newPrevBTN.setAttribute("onclick", "changeImg(0)");
          newPrevBTN.style.cssText = "left: " + calcImgToEdge + "px;";

        }
      }
    } );
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if(changeDir === 1) {
    calcNewImg = getLatestedOpenImg + 1;
    if(calcNewImg > images.length) {
        calcNewImg = 1;
    }
  }
  else if (changeDir === 0) {
    calcNewImg = getLatestedOpenImg - 1;
    if(calcNewImg < 1) {
      calcNewImg = images.length;
    }
  }

  newImg.setAttribute("src", "images/img" + calcNewImg + ".jpg");
  newImg.setAttribute("id", "current-img");

  getLatestedOpenImg = calcNewImg;




}