

const mainEl = document.querySelector(".container")
let overlay = document.querySelector(".overlay");
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
                    <img src=${url} alt="">
                    <p>${title}</p>
                </div>
                
            </div>
        `
        mainEl.insertAdjacentHTML("beforeend", markup)

        })


    })


    let images = document.querySelectorAll(".img")
    let imageSrc = document.querySelector(".img").src
    console.log(images)
    
    
    
    images.forEach((image) => {
        image.addEventListener("click", () => {

            overlay.insertAdjacentHTML("beforeend", `<img src="${imageSrc}`)
            
        })
    })

    

