import { products, parentCategory, category, subCategory } from "../../data.js";

const categoriesDiv = document.querySelector(".categories");
const productsDiv = document.querySelector(".products");
const noItemFoundMessage = document.getElementById("noItemFoundMessage");

function init() {
  displayParentCategories();
  showAllProducts();
}

function displayParentCategories() {
  const parentCategoriesButtons = parentCategory.map((pc) => `<button class="button parent-category" data-id="${pc.id}"> <img src="${pc.image}" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 5px;">  ${pc.name}</button>`).join("");
  categoriesDiv.innerHTML = `<button class="button all-products">Все продукты</button>` + parentCategoriesButtons;

  document.querySelectorAll(".parent-category").forEach((button) => {
    button.addEventListener("click", (event) => {
      displayCategories(event.target.dataset.id);

      if (event.target.classList.contains("button")) {
        document.querySelectorAll(".button").forEach(button => button.classList.remove("active"));
      }
      event.target.classList.add("active");
    });
  });

  document.querySelector(".all-products").addEventListener("click", showAllProducts);
  document.querySelector(".all-products").addEventListener("click", displayParentCategories);
}

function displayCategories(parentCategoryId) {
  const filteredCategories = category.filter((c) => c.parentID == parentCategoryId);
  if (filteredCategories.length > 0) {
    const categoryButtons = filteredCategories.map((c) => `<button class="button category" data-id="${c.id}">${c.name}</button>`).join("");
    categoriesDiv.innerHTML = `<button class="button all-products">Все продукты</button>` + categoryButtons;

    document.querySelectorAll(".category").forEach((button) => {
      button.addEventListener("click", (event) => {
        displaySubCategoriesOrProducts(event.target.dataset.id, parentCategoryId)

        if (event.target.classList.contains("button")) {
          document.querySelectorAll(".button").forEach(button => button.classList.remove("active"));
        }
        event.target.classList.add("active");
      });
    });
  } else {
    filterProductsByParentCategory(parentCategoryId);
  }

  document.querySelector(".all-products").addEventListener("click", showAllProducts);
  document.querySelector(".all-products").addEventListener("click", displayParentCategories);
}

function displaySubCategoriesOrProducts(categoryId, parentCategoryId) {
  const filteredSubCategories = subCategory.filter((sc) => sc.categoryID == categoryId);
  if (filteredSubCategories.length > 0) {
    const subCategoryButtons = filteredSubCategories.map((sc) => `<button class="button sub-category" data-id="${sc.id}">${sc.name}</button>`).join("");
    categoriesDiv.innerHTML = `<button class="button all-products">Все продукты</button>` + subCategoryButtons;

    document.querySelectorAll(".sub-category").forEach((button) => {
      button.addEventListener("click", (event) => {
        filterProductsBySubCategory(event.target.dataset.id, categoryId, parentCategoryId)

        if (event.target.classList.contains("button")) {
          document.querySelectorAll(".button").forEach(button => button.classList.remove("active"));
        }
        event.target.classList.add("active");
      });
    });
  } else {
    filterProductsByCategory(categoryId, parentCategoryId);
  }

  document.querySelector(".all-products").addEventListener("click", showAllProducts);
  document.querySelector(".all-products").addEventListener("click", displayParentCategories);
}

function filterProductsByParentCategory(parentCategoryId) {
  const filteredProducts = products.filter((p) => p.parentCategoryID == parentCategoryId);
  displayProducts(filteredProducts);
}

function filterProductsByCategory(categoryId, parentCategoryId) {
  const filteredProducts = products.filter((p) => p.categoryID == categoryId && p.parentCategoryID == parentCategoryId);
  displayProducts(filteredProducts);
}

function filterProductsBySubCategory(subCategoryId, categoryId, parentCategoryId) {
  const filteredProducts = products.filter((p) => p.subCategoryID == subCategoryId && p.categoryID == categoryId && p.parentCategoryID == parentCategoryId);
  displayProducts(filteredProducts);
}

function showAllProducts() {
  displayProducts(products);
}

function displayProducts(filteredProducts) {
  if (filteredProducts.length === 0) {
    noItemFoundMessage.style.display = "block";
    productsDiv.innerHTML = "";
  } else {
    noItemFoundMessage.style.display = "none";
    productsDiv.innerHTML = filteredProducts.map((product) => `
      <div class="product-card" data-category="${product.categoryID}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
          ${ product.hasDiscount ? `<div class="product-sale">-20%</div>` : "" }
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
    `).join("");

    document.querySelectorAll(".buy-button").forEach((button) => {
      button.addEventListener("click", addToCart);
    });
  }
}


Array.from(document.getElementsByClassName("filter-type")).forEach((item) => {
  item.addEventListener("click", (event) => {
    const button = event.target;
    productsDiv.innerHTML = "";

    document.querySelectorAll(".filter-type").forEach(i => i.classList.remove("activation"));
    button.classList.add("activation");

    if (button.classList.contains("new-product")) {
      products.filter(product => product.isNew).forEach(product => {
        productsDiv.innerHTML += generateProductCardHTML(product);
      });
    } else if (button.classList.contains("best-product")) {
      products.filter(product => product.bestseller).forEach(product => {
        productsDiv.innerHTML += generateProductCardHTML(product);
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
          duration:3000,
          style: {
              "font-family": "Ubuntu, sans-serif",
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
  const noItemFoundMessage = document.getElementById("noItemFoundMessage");

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
  const cartCounter = document.querySelector('.count');

  document.querySelector(".count").innerHTML = cartIDs.length;
  cartCounter.innerText = cartIDs.length;
}

init();
