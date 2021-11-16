    const galleryImages = document.querySelectorAll(".gallery-img");
    let getLatestOpenedImg;
    const windowWidth = window.innerWidth;

    if (galleryImages) {
        galleryImages.forEach((image, index) => {
            image.onclick = () => {
                const getElementCss = window.getComputedStyle(image);
                const getFullImgUrl = getElementCss.getPropertyValue("background-image");
                const getImgUrlPos = getFullImgUrl.split('/img/example/');
                const setNewImgUrl = getImgUrlPos[1].replace(`")`, ``);
                
                
                getLatestOpenedImg = index + 1;

                const container = document.body;
                const newImgWindow = document.createElement("div");
                container.appendChild(newImgWindow);
                newImgWindow.setAttribute("class", "img-window");
                newImgWindow.setAttribute("onclick", "closeImg()");

                const newImg = document.createElement("img");
                newImgWindow.appendChild(newImg);
                newImg.setAttribute("src", `./img/example/${setNewImgUrl}`);
                newImg.setAttribute("id", "current-img");


                newImg.onload = function () {
                    const imgWidth = this.width;
                    const calcImgToEdge = ((windowWidth - imgWidth) / 2 ) - 80;

                    const newNextBtn = document.createElement("a");
                    const btnNextText = document.createTextNode(">");
                    newNextBtn.appendChild(btnNextText);
                    container.appendChild(newNextBtn);
                    newNextBtn.setAttribute("class", "img-btn-next");
                    newNextBtn.setAttribute("onclick", "changeImg(1)");
        
                    const newPrevBtn = document.createElement("a");
                    const btnPrevText = document.createTextNode("<");
                    newPrevBtn.appendChild(btnPrevText);
                    container.appendChild(newPrevBtn);
                    newPrevBtn.setAttribute("class", "img-btn-prev");
                    newPrevBtn.setAttribute("onclick", "changeImg(0)");
                }

            }
        })
    }

    function closeImg() {
        document.querySelector(".img-window").remove();
        document.querySelector(".img-btn-next").remove();
        document.querySelector(".img-btn-prev").remove();
    }

    function changeImg(changeDir) {
        document.querySelector("#current-img").remove();
        const getImgWindow = document.querySelector(".img-window");
        const newImg = document.createElement("img");
        getImgWindow.appendChild(newImg);

        let calcNewImg = 1;
        if (changeDir === 1) {
            calcNewImg = getLatestOpenedImg + 1;
            if (calcNewImg > galleryImages.length) {
                calcNewImg = 1;
            }
        }
        if (changeDir === 0) {
            calcNewImg = getLatestOpenedImg - 1;
            if (calcNewImg < 1) {
                calcNewImg = galleryImages.length;
            }
        }

        newImg.setAttribute("src", `./img/example/image${calcNewImg}.png`);
        newImg.setAttribute("id", "current-img");

        getLatestOpenedImg = calcNewImg;
    }

document.querySelector("body").addEventListener("keydown", (event) => {
    const currentElem = document.querySelector("#current-img")
    if (currentElem && event.key === "Escape") {
        closeImg();
    }
})