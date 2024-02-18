import { products } from "../../data.js";

const categories = document.querySelector(".categories");

const allCategories = [...new Set(products.map((product) => product.category))];
allCategories[0] = "Все";
const listOfCategories = allCategories.map((category) => `<button class="button">${category}</button>`);
categories.innerHTML += listOfCategories.join("");

const productCards = document.querySelector(".products");

function showProductsList() {
  productCards.innerHTML = "";
  for (const product of products) {
    productCards.innerHTML += `
    <div class="product-card" data-category="${product.category}">
      <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
        ${product.hasDiscount ? `<div class="product-sale" aria-label="20% off">-20%</div>` : ''}
      </div>

      <div class="product-content">
        <div class="product-info">
          <p class="product-name">${product.name}</p>
          <small>${product.price}₸ (шт.)</small>
        </div>
        <div class="buy" data-id="${product.id}">
          <button class="buy-button" aria-label="add to cart">КУПИТЬ</button>
        </div>
      </div>
    </div>
    `
  }

  document.querySelectorAll(".buy-button").forEach(button => {
    button.addEventListener("click", addToCart);
  });
} showProductsList();


function filterProduct(value) {
  const products = document.querySelectorAll(".product-card");
  products.forEach((element) => {
    if (value == "Все") {
      element.classList.remove("hide");
    } else {
      const productElement = element.getAttribute("data-category");
      if (productElement === value) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  })
}

categories.addEventListener("click", (event) => {
  const clickedButton = event.target;
  const noItemFoundMessage = document.querySelector("#noItemFoundMessage");

  if (clickedButton.classList.contains("button")) {
      const buttons = document.querySelectorAll(".button");
      buttons.forEach(button => button.classList.remove("active"));
      noItemFoundMessage.style.display = "none";

      clickedButton.classList.add("active");
      filterProduct(clickedButton.innerText);
  }
});



Array.from(document.getElementsByClassName("filter-type")).forEach((item) => {
  item.addEventListener("click", (event) => {
    const button = event.target;
    productCards.innerHTML = "";

    document.querySelectorAll(".filter-type").forEach(i => i.classList.remove("activation"));
    button.classList.add("activation");

    if (button.classList.contains("new-product")) {
      products.filter(product => product.isNew).forEach(product => {
        productCards.innerHTML += generateProductCardHTML(product);
      });
    } else if (button.classList.contains("best-product")) {
      products.filter(product => product.bestseller).forEach(product => {
        productCards.innerHTML += generateProductCardHTML(product);
      });
    }
  });
});

function generateProductCardHTML(product) {
  return `
    <div class="product-card" data-category="${product.category}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        ${product.hasDiscount ? `<div class="product-sale" aria-label="20% off">-20%</div>` : ''}
      </div>

      <div class="product-content">
        <p>${product.name}</p>
        <small>${product.price}₸ (шт.)</small>
      </div>
    </div>
  `;
}


function addToCart(event) {
  const productId = event.currentTarget.closest(".buy").dataset.id;
  const product = products.find(product => product.id === Number(productId));

  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const isProductInCart = cartData.some(cartProduct => cartProduct.id === product.id);

  if (!isProductInCart) {
      cartData.push(product);
      localStorage.setItem("cart", JSON.stringify(cartData));

      Toastify({
          text: "✅ Товар добавлен в корзину",
          className: "info",
          gravity: "top",
          position: "center",
          style: {
              background: "#fff",
              color: '#000',
              "border-radius": "7px",
              width: "300px"
          }
      }).showToast();

      showCartCounter();
  } else {
      return;
  }
}


async function searchFilter() {
  const searchInputValue = document.getElementById("search-input")?.value.toLowerCase();
  const noItemFoundMessage = document.querySelector("#noItemFoundMessage");

  if (searchInputValue.length < 1) {
    return;
  }

  const products = document.querySelectorAll(".product-card");
  let itemFound = false;

  for (const element of products) {
    const productToLowerCase = element.innerText.toLowerCase();
    if (productToLowerCase.includes(searchInputValue)) {
      element.classList.remove("hide");
      itemFound = true;
    } else {
      element.classList.add("hide");
    }
  }

  if (!itemFound) {
    noItemFoundMessage.style.display = "block";
  } else {
    noItemFoundMessage.style.display = "none";
  }
} document.getElementById("search-input")?.addEventListener("input", searchFilter);


function showCartCounter() {
  const cartIDs = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCounter = document.querySelector('.basket-button');

  cartCounter.innerText = cartIDs.length;
}