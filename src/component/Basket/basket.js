import { data } from "../../data.js";
import {
  isEmptyArray,
  getTotalPrice,
  getTotalQuantity,
  currencyFormat,
} from "../../util/index.js";

const cartItems = document.querySelector('.cart-items');
const cartContainer = document.querySelector('.cart-container');
const modalOverlay = document.getElementById('orderModal');
const URL = 'https://wa.me/+77479894879?text=';

let cartProducts = null;

loadCartData();

function loadCartData() {
  cartProducts = getCartData();
  showCartProducts();
  showCartTotal();
}

function showCartProducts() {
  if (isEmptyArray(cartProducts)) {
      cartContainer.innerHTML = 'Opps, Your Cart Is Empty'
      return;
  }

  cartItems.innerHTML = '';

  for (const product of cartProducts) {
      cartItems.innerHTML += `
          <div class="cart-item" data-id="${product.id}">
              <img src="${product.image}" alt="${product.name}">
              <div class="title">${product.name}</div>
              <div class="quantity">
                  <button class="qty-dec">-</button>
                  <span>${product.quantity}</span>
                  <button class="qty-inc">+</button>
              </div>
              <div class="price-container">
                  <div class="price" data-initial-price="${product.price}">${currencyFormat(product.price * product.quantity)}</div>
                  <button class="cart-remove-btn">
                      <ion-icon name="trash" aria-hidden="true" aria-hidden="true"></ion-icon>
                  </button>
              </div>
          </div>
      `
  }

  // Add Listener for Quantity Buttons
  const quantityButtons = document.querySelectorAll('.quantity button');
  quantityButtons.forEach(button => {
      button.addEventListener('click', () => useCounter(button));
  });

  // Add Listener for Delete Buttons
  const deleteButtons = document.querySelectorAll('.cart-remove-btn');
  deleteButtons.forEach(button => {
      button.addEventListener('click', deleteCartItem);
  });

  showCartTotal();
}

function showCartTotal() {
  const cartRightSide = document.querySelector('.cart-right-side');
  const totalPrice = getTotalPrice(cartProducts);
  const totalProducts = getTotalQuantity(cartProducts);

  if (isEmptyArray(cartProducts)) {
      return;
  }

  cartRightSide.innerHTML = `
      <div class="flex">
          <span>Товары, ${totalProducts} шт.</span>
          <span>${currencyFormat(totalPrice)} </span>
      </div>
      <div class="flex">
          <span>Итого</span>
          <span>${currencyFormat(totalPrice)} </span>
      </div>
      <button id="order-button">Заказать</button>
  `;

  // Add an event listener to the "order-button" to show the modal
  const orderButton = document.getElementById('order-button');
  orderButton.addEventListener('click', function () {
      // Display the modal
      const orderModal = document.getElementById('orderModal');
      orderModal.style.display = 'flex';
  });

  // Add an event listener to the submit button
  const submitButton = document.querySelector('.form-button');
  submitButton.addEventListener('click', submitOrderForm);
}

function useCounter(button) {
  const quantityElement = button.parentElement.querySelector('span');
  let currentQuantity = parseInt(quantityElement.textContent, 10);

  if (button.classList.contains('qty-inc')) {
      currentQuantity++;
  } else if (button.classList.contains('qty-dec') && currentQuantity > 1) {
      currentQuantity--;
  }

  quantityElement.textContent = currentQuantity;

  const cartItem = button.closest('.cart-item');
  const productId = cartItem.dataset.id;

  const priceElement = cartItem.querySelector('.price');
  const initialPrice = parseFloat(priceElement.dataset.initialPrice);
  const updatedPrice = (currentQuantity * initialPrice).toFixed(2);

  priceElement.textContent = currencyFormat(updatedPrice);

  const updatedCartProducts = cartProducts.map(product => {
      if (product.id === Number(productId)) {
          return {
              ...product,
              quantity: currentQuantity,
          }
      }
      return product;
  });

  cartProducts = updatedCartProducts;

  updateCartData(cartProducts);

  showCartTotal();
}

function deleteCartItem(event) {
  const cartItem = event.currentTarget.closest('.cart-item');
  const productId = cartItem.dataset.id;
  const cartData = getCartData();

  const updatedCartData = cartData.filter(product => product.id !== Number(productId));
  localStorage.setItem('cart', JSON.stringify(updatedCartData));

  cartProducts = updatedCartData;
  showCartProducts();
  showCartTotal();
}

//------ LocalStorage Helpers --------//
function getCartData() {
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  return cartData;
}

function updateCartData(updatedCartData) {
  localStorage.setItem('cart', JSON.stringify(updatedCartData));
}

//? Submit Form;
function submitOrderForm() {
  // Grab all form inputs
  const userNameInput = document.querySelector('.form-input[name="userName"]');
  const userPhoneInput = document.querySelector('.form-input[name="userPhone"]');
  const userAddressInput = document.querySelector('.form-input[name="userAddress"]');

  // Deliver Options;
  const deliverOptions = document.querySelectorAll('[name="deliver"]');
  const selectedDeliverOption = Array.from(deliverOptions).find(option => option.checked);
  const deliverValue = selectedDeliverOption ? selectedDeliverOption.value : '';

  // Payment Options;
  const paymentOptions = document.querySelectorAll('[name="payment"]');
  const selectedPaymentOption = Array.from(paymentOptions).find(option => option.checked);
  const paymentValue = selectedPaymentOption ? selectedPaymentOption.value : '';

  // User Optional Comment;
  const userCommentTextarea = document.querySelector('.form-comment textarea[name="userComment"]');

  // All Values;
  const userName = userNameInput.value;
  const userPhone = userPhoneInput.value;
  const userAddress = userAddressInput.value;
  const userComment = userCommentTextarea.value;

  const cart = getCartData();
  const productsName = cart.map((item, inx) => `   *${inx + 1}) ${item.name} :* _${item.quantity}${item.unit}/${currencyFormat(+item.price * item.quantity)}_`).join('%0a');
  // Validate Form;
  if (validateFormFields(userName, userPhone, userAddress, deliverValue, paymentValue)) {
      const phoneNumber = citiesData.get(userAddress);
      const message = `*· Имя :* ${userName}%0a*· Номер :* ${userPhone}%0a*· Адрес :* ${userAddress}%0a%0a*· Способ получения :* ${deliverValue}%0a*· Способ оплаты :* ${paymentValue}%0a*· Список товаров :* %0a${productsName}%0a%0a${userComment ? `*· Комментарий к заказу :* _${userComment}_` : ''}%0a%0a*· Итого :* _${currencyFormat(getTotalPrice(cart))}_%0a`

      const URL = `https://wa.me/${phoneNumber}?text=`;
      window.open(URL + message, '_blank');
  }
}

function validateFormFields(userName, userPhone, userAddress, deliverValue, paymentValue) {
  if (userName.trim() === '' ||
      userPhone.trim() === '' ||
      userAddress.trim() === '' ||
      !deliverValue ||
      !paymentValue
  ) {
      return false;
  }

  return true;
}

//? Modal Window;
modalOverlay.addEventListener('click', function (event) {
  // Check if the clicked element is the modal overlay itself (not its children)
  if (event.target === modalOverlay) {
      // Close the modal
      closeModal();
  }
});

// Function to close the modal
function closeModal() {
  const orderModal = document.getElementById('orderModal');
  orderModal.style.display = 'none';
}