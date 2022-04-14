const foodSection = document.querySelector(".food-section")
const breakfastBtn = document.querySelector(".breakfast-btn")
const lunchBtn = document.querySelector(".lunch-btn")
const shakesBtn = document.querySelector(".shakes-btn")
const dinnerBtn = document.querySelector(".dinner-btn")
const allBtn = document.querySelector(".all-btn")
const buttonList = document.querySelector(".button-list")

const FOODS = [
    {
        foodType: "breakfast",
        foodName: "buttermilk pancakes",
        foodImg: "img/item-1.jpeg",
        foodPrice: "$15.99",
        FoodDescription: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        foodType: "breakfast",
        foodName: "Country Delight",
        foodImg: "img/item-4.jpeg",
        foodPrice: "$20.99",
        FoodDescription: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut"
    },
    {
        foodType: "breakfast",
        foodName: "bacon overflow",
        foodImg: "img/item-7.jpeg",
        foodPrice: "$8.99",
        FoodDescription: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },
    {
        foodType: "lunch",
        foodName: "diner double",
        foodImg:  "img/item-2.jpeg",
        foodPrice: "$13.99",
        FoodDescription: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        foodType: "lunch",
        foodName: "egg attack",
        foodImg: "img/item-5.jpeg",
        foodPrice: "22.99",
        FoodDescription: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },
    {
        foodType:"lunch",
        foodName: "american classic",
        foodImg: "img/item-8.jpeg",
        foodPrice: "$12.99",
        FoodDescription: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
        foodType: "shakes",
        foodName: "godzilla milkshake",
        foodImg: "img/item-3.jpeg",
        foodPrice: "$6.99",
        FoodDescription: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        foodType: "shakes",
        foodName: "oreo dream",
        foodImg: "img/item-6.jpeg",
        foodPrice: "$18.99",
        FoodDescription: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
        foodType: "shakes",
        foodName: "quarentine buddy",
        foodImg: "img/item-9.jpeg",
        foodPrice: "$16.99",
        FoodDescription: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
    {
        foodType: "dinner",
        foodName: "steak dinner",
        foodImg: "img/item-10.jpeg",
        foodPrice: "$39.99",
        FoodDescription: "kateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
    
]



function all(){
    FOODS.forEach((foods)=> elementMaker(foods.foodName, foods.foodImg, foods.foodPrice, foods.FoodDescription))
}
window.addEventListener("DOMContentLoaded", () =>{
    all()

    const foodTypes = FOODS.reduce((values, item) => {
        if(!values.includes(item.foodType)){
            values.push(item.foodType)
        }
        return values
    },["all"])
    
    const buttonsHTML = foodTypes.map((categories) => {
        return `<li>
        <button class="all-btn" data-id="${categories}">
            ${categories}
        </button>
        <li>`
    
    }).join('')
    
    buttonList.innerHTML = buttonsHTML


    const buttons = document.querySelectorAll("button")

    buttons.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            removeMenuItems()
            const target = e.currentTarget.dataset.id
            FOODS.map((item) =>{
                if(item.foodType === target){
                    elementMaker(item.foodName, item.foodImg, item.foodPrice, item.FoodDescription)
                } else if (target === "all"){
                    removeMenuItems()
                    all()
                }
            }).join("")
           
        })
    })

})



function elementMaker(name, img, price, description){
    let article = document.createElement("article")
    article.setAttribute("class", "food-container")

    article.innerHTML = menuItemHTML(name, img, price, description)

    foodSection.appendChild(article)


}




function menuItemHTML(name, img, price, description){
    HTML = `<img class="food-img" src="${img}" alt="food image">
    <div class="align">
        <div class="food">
            <h2 class="food-name">${name}</h2>
            <span class="food-price">${price}</span>
        </div>
        <div class="food-description">
            <p>${description}</p>
        </div>
    </div>`
    return HTML

}

function removeMenuItems(){
    let menuItems = document.querySelectorAll("article")
    menuItems.forEach((remove) =>  foodSection.removeChild(remove))
}
