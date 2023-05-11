var listofProducts = [
   // {img:"url", name:"television", desc:"LG TV 12in", price:13000, rating:4}
]


// ITEMS ADDED TO CARD

var cart = [];



const btn = document.getElementById("btn");
// btn.addEventListener("click", addProduct, false);

const display = document.getElementById("display");

const listingContainer = (listOfProducts) => {
    const container = document.createElement("div");
    container.className = "grid grid-cols-3 p-5";

    listOfProducts.map((product, index)=>{
        const productContainer = createProduct(index, product.name, product.desc, product.price)
        container.appendChild(productContainer);
    })

    return container;
};


const detailContainer = (product) => {
    const container = document.createElement("div");
    container.className = "flex justify-between p-5"

    const left = document.createElement("div");
    left.className = "w-full p-2";

    const img = document.createElement("img")
    img.className = "3"

    const desc = document.createElement("p");
    desc.className = "text-slate-400";
    desc.innerText = product.desc;

    const amount = document.createElement("p");
    amount.className = "text-2xl font-bold";
    amount.innerText = product.price;

    const selectContainer = document.createElement("div");
    
}





const createProduct = (index, product, desc, price) =>{
    const card = document.createElement("div");

    card.click = showProductDetails(index);
    card.className = "border-2 border-slate-300 rounded-md";

    const imageHolders = document.createElement("div");
    imageHolders.className = "h-40 w-full";

    const img = document.createElement("img");
    img.className = "object-cover w-full";
    img.src = image;

    imageHolders.appendChild(img);

    const title = document.createElement("p");
    title.className = "text-2xl font-bold";
    title.innerText = name;

    const amount = document.createElement("p");
    amount.className = "text-2xl font-bold";
    amount.innerText = price;
}


btn.addEventListener("click", (e)=>{
    e.preventDefault();
    var form = document.forms["form1"];
    var data = new FormData(form);
    var image = document.getElementById("photo").files[0];
    var imageUrl = URL.createObjectURL(image);
    var title = data.get("title");
    var desc = data.get("description");
    var price = data.get("price");

    let product = {image: imageUrl, name: title, desc: desc, price: price};
    listOfProducts.push(product);

    alert(product);
});


const updatePanel = (listOfProducts) => {
    if (listOfProducts.length){
        var listContainer = listingContainer(listOfProducts);
    do{
        display.removeChild(display.firstChild);
    }while(display.hasChildNodes())
    }
}

//PRODYUCT LISTINGS

//PRODUCT DETAIL


//CART ITEMS