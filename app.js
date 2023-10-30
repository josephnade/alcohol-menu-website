const menu = [{
        id: 1,
        title: "Beer",
        category: "Low Alcohol",
        price: 1.99,
        img: "images/beer.jpeg",
        desc: `Enjoy a cold brew with friends – the perfect way to unwind.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "High Alcohol",
        price: 7.99,
        img: "images/brandy.jpg",
        desc: `Indulge in the exquisite taste of brandy, a fine spirit aged to perfection.`,
    },
    {
        id: 3,
        title: "Gin",
        category: "High Alcohol",
        price: 5.99,
        img: "images/gin.jpeg",
        desc: `Discover the refreshing botanical notes of gin in every sip – a classic cocktail essential.`,
    },
    {
        id: 4,
        title: "Rum",
        category: "High Alcohol",
        price: 6.49,
        img: "images/rum.jpg",
        desc: `Savor the warm, Caribbean vibes in each sip of rum, a timeless spirit with a touch of the tropics.`,
    },
    {
        id: 5,
        title: "Tequila",
        category: "High Alcohol",
        price: 4.99,
        img: "images/tequila.jpg",
        desc: `Experience the spirited essence of Mexico in every tequila shot, a taste of tradition and celebration.`,
    },
    {
        id: 6,
        title: "Vodka",
        category: "Medium Alcohol",
        price: 9.99,
        img: "images/vodka.jpg",
        desc: `Vodka: The clean, versatile spirit for classic cocktails and endless mixing possibilities. Cheers to pure enjoyment!`,
    },
    {
        id: 7,
        title: "Whiskey",
        category: "High Alcohol",
        price: 6.99,
        img: "images/whiskey.jpg",
        desc: `Whiskey: Aged to perfection, this timeless spirit delivers rich, complex flavors. Sip, savor, and appreciate the craftsmanship.`,
    },
    {
        id: 8,
        title: "Wine",
        category: "Medium Alcohol",
        price: 8.99,
        img: "images/wine.jpg",
        desc: `Sherbet: A sweet, fizzy delight, perfect for quenching your thirst and satisfying your taste buds on a hot day.`,
    },
    {
        id: 9,
        title: "Cider",
        category: "Low Alcohol",
        price: 3.99,
        img: "images/cider.jpeg",
        desc: `Cider: Enjoy the fruity, apple-forward flavors in every sip – a crisp and refreshing beverage for all seasons.`,
    },
];

//* Initializing some datas
var baseDOM = document.getElementById("base");
var buttonsDOM = document.getElementById("buttons");
var categories = [];
var allString = "All";



//* Setting "All" button
setCategory(allString);

//* Displaying Whole menu at first.
displayMenu(menu);
categories.forEach((category) => {
    setCategory(category);
});


//* Displaying category buttons and setting event listeners
function setCategory(category) {
    let button = document.createElement("button");
    button.className = "btn btn-outline-dark btn-item";
    button.setAttribute("data-id", "category");
    button.innerHTML = `${category}`;

    //* If clicked "All" button
    if (category === allString) {
        button.addEventListener("click", () => {
            displayMenu(menu);
        });
    }
    //* If clicked other categories
    else {
        button.addEventListener("click", () => {
            const filteredMenu = menu.filter(item => item.category === category);
            displayMenu(filteredMenu);
        });
    }
    //* Appending new button item
    buttonsDOM.appendChild(button);
}


//* Firstly clear the menu and display new given menu
function displayMenu(menuData) {
    clearMenu();
    menuData.forEach((alcohol) => {
        //* Select unique categories in the given menu and push categories lit
        if (!categories.includes(alcohol.category)) {
            categories.push(alcohol.category);
        }
        //* Setting menu item HTML
        let menuDiv = document.createElement("div");
        menuDiv.className = "menu-items col-lg-6 col-sm-12";
        menuDiv.innerHTML =
            `
        <img src="${alcohol.img}" alt="${alcohol.title}" class="photo">
        <div class="menu-info">
            <div class="menu-title">
                <h4 class="title">${alcohol.title}</h4>
                <h4 class="price">${alcohol.price}</h4>
            </div>
            <div class="menu-text">${alcohol.desc}</div>
        </div>
        `;
        //* Appending new menu item
        baseDOM.appendChild(menuDiv);
    });
}

//* Clearing all menu html
function clearMenu() {
    baseDOM.innerHTML = "";
}