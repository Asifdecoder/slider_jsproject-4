(function () {
    const pictures = ["1", "2", "3"];
  
    const buttons = document.querySelectorAll(".btn");
    const imgDiv = document.querySelector(".img-container");
  
    if (imgDiv && buttons.length > 0) {
      let counter = 0;
  
      buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
          if (button.classList.contains("btn-left")) {
            counter--;
            if (counter < 0) {
              counter = pictures.length - 1;
              console.log("left");
            }
          } else if (button.classList.contains("btn-right")) {
            counter++;
            if (counter > pictures.length - 1) {
              counter = 0;
              console.log("right");
            }
          }
          imgDiv.style.backgroundImage = `url(images/${pictures[counter]}.jpg)`;
        });
      });
    } else {
      console.error("Image container or buttons not found");
    }
  })();
  