const products = [
  {
    name: "Ordenador",
    price: 1000,
    isAvailable: true
  },
  {
    name: "Televisión",
    price: 500,
    isAvailable: true
  },
  {
    name: "Teclado",
    price: 40,
    isAvailable: false
  },
]

const productList = document.querySelector(".product-list");
const shoppingCart = document.querySelector(".shopping-cart");

function addProduct(product) {
  const li = document.createElement("li");
  li.classList.add("product-item");

  const h2 = document.createElement("h2");
  h2.innerHTML = product.name;
  if (product.isAvailable) {
    h2.classList.add("available");
  } else {
    h2.classList.add("unavailable");
  }
  
  const p = document.createElement("p");
  p.innerHTML = product.price + "€";
  
  li.appendChild(h2);
  li.appendChild(p);
  
  productList.appendChild(li);
}

products.forEach((product) => {
  addProduct(product);
})

const productItems = document.querySelectorAll(".product-item");

productItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item);
    // productList.removeChild(item);
    shoppingCart.appendChild(item.cloneNode(true));  
  })
})



