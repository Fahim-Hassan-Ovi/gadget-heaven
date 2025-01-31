# **Gadget Heaven

### Live Website


### Requirement Document


### Project Overview

#### Gadget Heaven is a modern e-commerce platform for gadget enthusiasts. It features structured navigation, categorized product listings, and essential e-commerce functionalities like a shopping cart, wishlist, and sorting options. Built with React, it ensures a seamless and responsive user experience.


### React Fundamentals Used
- Components - Modular UI components for different sections of the website.
- Props & State - Data handling within components.
- React Router - Navigation between different pages (Dashboard, Stats, Product Details, etc.).
- Hooks (useState, useEffect, useContext) - State management and side effects.
- Context API - Global state management for cart and wishlist.


### Data Management Approach
- LocalStorage - For persisting cart and wishlist data between sessions


### Key Feature
- Structured Navigation Bar
  - Includes Logo, Brand Name, Dashboard, Stats with active route indication.
- Product Categorization & Filtering
  - Sidebar categories (Computers, Phones, Smartwatches, etc.).
  - Clicking a category dynamically updates the product list.
- Shopping Cart & Wishlist
  - Users can add items to Cart and Wishlist.
  - Items in the wishlist cannot be added multiple times.
  - Total price calculation for cart items.
- Sorting & User Experience Enhancements
  - "Sort by Price" button sorts cart items in descending order.
  - Reloading the page does not break the functionality.
  - Ensures price constraints (no item below $50).
- Additional Pages & 404 Handling
  - Custom 404 Page for invalid routes.
  - Additional meaningful route added beyond core requirements.

