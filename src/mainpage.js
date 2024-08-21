const content = document.getElementById("content");

function loadPage(){ 
    const h1 = document.createElement("h1");
    h1.textContent = "Joey's Burger";
    h1.classList.add("restName");
    content.appendChild(h1);
    
    const burgerMenu = document.createElement("div");
    burgerMenu.classList.add("burgerMenu");

    const burgerDesc = document.createElement("p");
    const burgerPrice = document.createElement("p");
    burgerDesc.classList.add("burgerDesc");
    burgerPrice.classList.add("burgerPrice");
    burgerDesc.textContent = "Now that's a Burger!";
    burgerPrice.textContent = "14.99$ <br> includ. tax";

    burgerMenu.appendChild(burgerDesc);
    burgerMenu.appendChild(burgerPrice); 
    
    content.appendChild(burgerMenu);
}

export {loadPage};

