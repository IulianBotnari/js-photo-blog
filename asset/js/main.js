

const mainEl = document.querySelector(".container")
let overlay = document.querySelector(".overlay_d_none")


axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        let items
        items = response.data

        items.forEach(element => {
            let itemsEl = element

            let { albumId, id, title, url, thumbnailUrl } = itemsEl





            let markup = `
        <div class="card_mobile card_tablet">
        <div class="circle"></div>
        <div class="img">
        <img id=${id} src=${url} alt="">
        <p>${title}</p>
        </div>
        
        </div>
        `
            mainEl.insertAdjacentHTML("beforeend", markup)


        })

        const buttonEL = document.querySelector(".btn")
        let selectedCard = document.querySelectorAll("img")

        selectedCard.forEach(selectedCard => {

            selectedCard.addEventListener("click", () => {
    
                let cardSrc = selectedCard.src

                let imgOver = `<img style="width: 300px" src=${cardSrc} alt="">`
                overlay.classList.replace("overlay_d_none", "overlay_d_flex")
                buttonEL.classList.remove("d_none")
                overlay.insertAdjacentHTML("beforeend", imgOver)
                

            })
        })

        

    })






