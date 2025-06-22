# Amazon Clone 🛒

A JavaScript-based clone of the Amazon shopping website. This project demonstrates DOM manipulation, event handling, and modular JavaScript using `import/export`.

## 🔍 Features

- Display products dynamically using JavaScript
- Add products to cart
- View and update cart contents on a checkout page
- Delete items from the cart
- Responsive design with basic styling

## 🧱 Project Structure

Amazon-Clone/
├── amazon.html # Main shopping page
├── checkout.html # Checkout/cart summary page
├── amazon.js # JS for product rendering and add-to-cart logic
├── checkout.js # JS for cart summary, update & delete actions
├── data/
│ ├── cart.js # Contains cart array and related functions
│ └── products.js # Product data array
├── images/ # Images used in the site
├── styles/
│ ├── shared/
│ │ ├── general.css
│ │ └── amazon-header.css
│ └── pages/
│ └── amazon.css
└── README.md

## 🚀 How to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Pranav-49/Amazon-Clone.git
   cd Amazon-Clone

2. Use Live Server
  Open the folder in VS Code.
  Install the "Live Server" extension.
  Right-click on amazon.html → Open with Live Server.
  The project should run at: http://127.0.0.1:5500/amazon.html.

3. JavaScript Modules Note
  This project uses ES6 modules (type="module").
  Make sure to run it via a server (not by opening directly in the browser).

## 🧠 Functionalities
Add to Cart: Click on the button to add the product.

Cart Quantity: Header shows the total cart item count.

Checkout Page: View all items, change quantity (via input), or delete items.

Quantity Update: Input appears when clicking "Update", press Enter to confirm.

## 🛠️ Future Improvements
Store cart data in localStorage for persistence

Add total price calculation

Implement product search/filtering

Connect with backend/database for real data

Add login/signup functionalit
