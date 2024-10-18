

const mainEl = document.querySelector("main")
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(response => {
    let items
    items = response.data

    items.forEach(element => {
        let itemsEl = element

        let {albumId, id, title, url, thumbnailUrl} = itemsEl

        console.log(itemsEl)

        console.log(albumId);
        

        
    })
    
    
})




