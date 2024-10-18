

const mainEl = document.querySelector(".container")
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        let items
        items = response.data

        items.forEach(element => {
            let itemsEl = element

            let { albumId, id, title, url, thumbnailUrl } = itemsEl

            console.log(itemsEl)

            console.log(albumId);

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




