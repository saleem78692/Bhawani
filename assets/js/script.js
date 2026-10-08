/* Mobile Menu */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

/* Image Gallery */

function changeImage(button) {
  const image = button.getAttribute("data-image");

  document.getElementById("mainImage").src = image;

  document.querySelectorAll(".thumb").forEach((btn) => {
    btn.classList.remove("border-green-700");

    btn.classList.add("border-transparent");
  });

  button.classList.remove("border-transparent");
  button.classList.add("border-green-700");
}

/* Quantity */

let quantity = 1;

function increaseQty() {
  quantity++;

  document.getElementById("quantity").innerText = quantity;
}

function decreaseQty() {
  if (quantity > 1) {
    quantity--;
  }

  document.getElementById("quantity").innerText = quantity;
}

/* Size Selection */

document.querySelectorAll(".sizeBtn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".sizeBtn").forEach((btn) => {
      btn.classList.remove("border-green-700", "bg-green-50");

      btn.classList.add("border-slate-300");
    });

    button.classList.remove("border-slate-300");

    button.classList.add("border-green-700", "bg-green-50");
  });
});

/* Accordion */

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("i");

  content.classList.toggle("hidden");

  if (content.classList.contains("hidden")) {
    icon.classList.remove("bi-dash");
    icon.classList.add("bi-plus");
  } else {
    icon.classList.remove("bi-plus");
    icon.classList.add("bi-dash");
  }
}

/* Pincode */

function checkPincode() {
  const pincode = document.getElementById("pincode").value;
  const message = document.getElementById("deliveryMessage");

  message.classList.remove("hidden");

  if (/^[0-9]{6}$/.test(pincode)) {
    message.innerText =
      "✓ Great! This product is available for delivery at your location.";

    message.classList.remove("text-red-600");
    message.classList.add("text-green-700");
  } else {
    message.innerText = "Please enter a valid 6-digit pincode.";

    message.classList.remove("text-green-700");
    message.classList.add("text-red-600");
  }
}

const productSearch = document.getElementById("productSearch");
productSearch.addEventListener("input", filterProducts);
function filterProducts() {
  const searchValue = productSearch.value.toLowerCase().trim();
  const products = document.querySelectorAll(".product-item");
  let found = false;
  products.forEach((product) => {
    const productName = product.getAttribute("data-name").toLowerCase();
    if (productName.includes(searchValue)) {
      product.classList.remove("hidden");
      found = true;
    } else {
      product.classList.add("hidden");
    }
  });
  const noResult = document.getElementById("noResult");
  if (found) {
    noResult.classList.add("hidden");
  } else {
    noResult.classList.remove("hidden");
  }
}
/* Open modal */ function openSearchModal() {
  const modal = document.getElementById("search-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  setTimeout(() => {
    document.getElementById("productSearch").focus();
  }, 100);
}
/* Close modal */ document
  .querySelectorAll('[data-modal-hide="search-modal"]')
  .forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.getElementById("search-modal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
  });
/* Close when clicking outside */ document
  .getElementById("search-modal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      this.classList.add("hidden");
      this.classList.remove("flex");
    }
  });
/* ESC key */ document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("search-modal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});
