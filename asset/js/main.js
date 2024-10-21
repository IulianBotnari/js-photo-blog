

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
                    <img class="a${id}" src=${url} alt="">
                    <p>${title}</p>
                </div>
                
            </div>
        `
            mainEl.insertAdjacentHTML("beforeend", markup)

            
        })
        let imagesa1 = document.querySelector(".a1")
        let imagesa2 = document.querySelector(".a2")
        let imagesa3 = document.querySelector(".a3")
        let imagesa4 = document.querySelector(".a4")
        let imagesa5 = document.querySelector(".a5")
        let imagesa6 = document.querySelector(".a6")

        let images1 = document.querySelector(".a1").src
        let images2 = document.querySelector(".a2").src
        let images3 = document.querySelector(".a3").src
        let images4 = document.querySelector(".a4").src
        let images5 = document.querySelector(".a5").src
        let images6 = document.querySelector(".a6").src



        let cards = document.querySelector(".pre_overlay")


        imagesa1.addEventListener("click", () => {
            cards.classList.add("d_none")
            overlay.insertAdjacentHTML("beforeend", `
                <button class="btn">click</button>
                <img src="${images1}">`)
            let btn = document.querySelector(".btn")

            btn.addEventListener("click", () =>{
                cards.classList.remove("d_none")
                overlay.classList.add("d_none")

                })
    
        })

        imagesa2.addEventListener("click", () => {
            cards.classList.add("d_none")
            overlay.insertAdjacentHTML("beforeend", `
                <button class="btn">click</button>
                <img src="${images2}">`)
    
        })

        imagesa3.addEventListener("click", () => {
            cards.classList.add("d_none")
            overlay.insertAdjacentHTML("beforeend", `
                <button class="btn">click</button>
                <img src="${images3}">`)
    
        })

        imagesa4.addEventListener("click", () => {
            cards.classList.add("d_none")
            overlay.insertAdjacentHTML("beforeend", `
                <button class="btn">click</button>
                <img src="${images4}">`)
    
        })

        imagesa5.addEventListener("click", () => {
            cards.classList.add("d_none")
            overlay.insertAdjacentHTML("beforeend", `
                <button class="btn">click</button>
                <img src="${images5}">`)
    
        })

        imagesa6.addEventListener("click", () => {
            cards.classList.add("d_none")
            overlay.insertAdjacentHTML("beforeend", `
                <button class="btn">click</button>
                <img src="${images6}">`)
    
        })


    })
    
    
    
    


