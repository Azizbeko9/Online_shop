const body = document.querySelector("body")
const sun = document.querySelector(".sun")
const dot = document.querySelector(".dot")
const cardEl = document.querySelector(".cards")
const input = document.querySelector("input")
const select_value = document.querySelector(".select_value")


var mode = "dark"

sun.addEventListener("click", () => {

    if (mode == "dark") {
        localStorage.setItem("mode", "light")
    } else {
        localStorage.setItem("mode", "dark");
    }

    changeMode()

});

const changeMode = () => {
    mode = localStorage.getItem("mode")
    if (mode == "dark") {
        body.classList.add("dark")
    } else {
        body.classList.remove("dark")
    }
}


changeMode()

const api_link = "https://fakestoreapi.com/products";

const getData = async (link) => {
    const req = await fetch(link);
    const data = await req.json()
    writeData(data)

}

getData(api_link)

const writeData = (cards) => {
    cards.forEach((item) => {

        cardEl.innerHTML += `
      <div class="card">
      <div class="new">
                    <img src="./imgs/New.svg" alt="">
                    </div>
                         <div class="icons">
                    <i class="fa-regular fa-heart heart"></i>
                    <i class="fa-regular fa-eye eye"></i>
                    <i class="fa-solid fa-repeat repeat"></i>
                    <i class="fa-solid fa-bag-shopping bag"></i>
                </div>
                        <img src=${item.image} alt="">
                        <h1>${item.title.slice(0, 20)}...</h1>
                        <p class="category"><span>Category: </span>${item.category}</p>
                        <p><span>Price: </span>${item.price}$</p>
                        <p><span>existent: </span>${item.rating.count}</p>
                    </div>
    
    `
    });
}

input.addEventListener("input", () => {
    const allproducts = document.querySelectorAll(".card")

    allproducts.forEach((item) => {
        if (!item.querySelector("h1").textContent.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())) {
            item.classList.add("hidden")

        } else {
            item.classList.remove("hidden")

        }

    })

})


select_value.addEventListener("change", () => {
    const allcategory = document.querySelectorAll(".card")

    allcategory.forEach((item) => {
        if (select_value.value != "All") {
            if (!item.querySelector(".category").textContent.toLocaleLowerCase().includes(select_value.value.toLocaleLowerCase())) {
                item.classList.add("hidden")

            } else {
                item.classList.remove("hidden")

            }
        } else {
            item.classList.remove("hidden")

        }
    })

})

