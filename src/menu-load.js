const menuOptions = [
    {
        name: "Margherita",
        desc: "italian red sauce, fior di latte, fresh basil, olive oil",
        price: "$15"
    },
    {
        name: "La Parisienne",
        desc: "la quercia prosciutto, gruyère, ricotta, brown butter, caramelized onion, arugula, pickled mustard seed",
        price: "$20"
    },
    {
        name: "The Basque",
        desc: "spanish chorizo, mozzarella, goat cheese, piquillo pepper, red onion, castelvetrano olive, preserved lemon",
        price: "$18"
    },
    {
        name: "Sausage and Onion",
        desc: "fennel sausage, mozzarella, provolone, crème fraîche, leek, scallion, caramelized onion, fennel pollen",
        price: "$17"
    },
    {
        name: "Amalfi Coast",
        desc: "italian red sauce, garlic, kalamata olive, red onion, basil, colatura di alici, calabrian chile, parmigiano-reggiano",
        price: "19"
    }
]

const renderMenu = () => {
    const imgDiv = document.querySelector(".main-img");
    const mainHeading = document.querySelector("#img-overlay-title");
    const mainSubheading = document.querySelector(".main-subheading");
    const subheading = document.querySelector(".sub-title");
    const contentHolder = document.querySelector("#content-holder");
    const mainMsgWrapper = document.querySelector(".main-msg-wrapper");

    const menuDiv = document.createElement("div");

    menuOptions.forEach(menuObj => {
        let itemDiv = document.createElement("div");
        let itemName = document.createElement("h3");
        let itemDesc = document.createElement("p");
        let itemPrice = document.createElement("p");
    
        itemDiv.classList.add("menuItems");
        itemName.classList.add("item-name");
        itemDesc.classList.add("item-desc");
        itemPrice.classList.add("item-price");

        let nameVal = menuObj.name;
        let descVal = menuObj.desc;
        let priceVal = menuObj.price;

        itemName.textContent = nameVal; 
        itemDesc.textContent = descVal; 
        itemPrice.textContent = priceVal;
        
        itemDiv.appendChild(itemName);    
        itemDiv.appendChild(itemDesc);    
        itemDiv.appendChild(itemPrice);

        menuDiv.appendChild(itemDiv);
    })

    const picLink = "https://i2.wp.com/www.eatthis.com/wp-content/uploads/2020/07/spanish-style-pizza.jpg";
    const mainMsg = "Menu";
    const mainSubMsg = ""
    const subHeadingMsg = "Pizza";

    imgDiv.style.background = "url(" + picLink + ") no-repeat";
    imgDiv.style['background-size'] = "100%";
    mainHeading.textContent = mainMsg;
    mainSubheading.textContent = mainSubMsg;
    subheading.textContent = subHeadingMsg;

    contentHolder.appendChild(menuDiv)
}

export { renderMenu, menuOptions }