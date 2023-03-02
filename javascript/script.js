const accordionItem=document.querySelectorAll(".accordion_item")


accordionItem.forEach(accordion=>{
    accordion.addEventListener("click",()=>{
        accordionItem.forEach(item=>{
            if (item.classList.contains("active") && item!==accordion) {
                item.classList.remove("active")
            }
        })
        accordion.classList.toggle("active")
    })
})