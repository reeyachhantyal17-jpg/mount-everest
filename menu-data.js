// Names and prices retrieved from the restaurant menu on October 9, 2026.
const MENU = [
  {
    "name": "Samosas (2 Pcs)",
    "price": "$6.50",
    "category": "Appetizers (Vegetarian)",
    "image": "images/dish-0.png"
  },
  {
    "name": "Vegetable Pakora",
    "price": "$6.50",
    "category": "Appetizers (Vegetarian)",
    "image": "images/dish-1.jpg"
  },
  {
    "name": "Aloo Tikki Chaat",
    "price": "$7.99",
    "category": "Appetizers (Vegetarian)",
    "image": null
  },
  {
    "name": "Chef’s Special Assorted Combo Platter",
    "price": "$12.99",
    "category": "Appetizers (Vegetarian)",
    "image": "images/dish-3.png"
  },
  {
    "name": "Dahi Chaat Papri",
    "price": "$7.99",
    "category": "Appetizers (Vegetarian)",
    "image": null
  },
  {
    "name": "Hummus Fritters",
    "price": "$5.99",
    "category": "Appetizers (Vegetarian)",
    "image": "images/dish-5.png"
  },
  {
    "name": "Mt. Everest Aloo Fry",
    "price": "$7.50",
    "category": "Appetizers (Vegetarian)",
    "image": null
  },
  {
    "name": "Samosa Chaat",
    "price": "$7.99",
    "category": "Appetizers (Vegetarian)",
    "image": null
  },
  {
    "name": "Chicken Tikka Platter",
    "price": "$17.99",
    "category": "Appetizers (Meat)",
    "image": "images/dish-8.png"
  },
  {
    "name": "Garlic Coco Shrimp",
    "price": "$10.99",
    "category": "Appetizers (Meat)",
    "image": null
  },
  {
    "name": "Chicken & Rice Soup",
    "price": "$6.99",
    "category": "Soups",
    "image": null
  },
  {
    "name": "Chicken Noodle Soup",
    "price": "$6.99",
    "category": "Soups",
    "image": "images/dish-11.png"
  },
  {
    "name": "Mulligatawny (Lentil Soup)",
    "price": "$7.50",
    "category": "Soups",
    "image": "images/dish-12.png"
  },
  {
    "name": "Vegetable Soup",
    "price": "$5.99",
    "category": "Soups",
    "image": null
  },
  {
    "name": "Gobi Chana Masala",
    "price": "$16.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": "images/dish-14.png"
  },
  {
    "name": "Himalay Chana Paneer",
    "price": "$18.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": null
  },
  {
    "name": "Mt. Everest Chicken Aloo Masala",
    "price": "$19.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": null
  },
  {
    "name": "Mt. Everest Chicken Tikka Masala",
    "price": "$20.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": "images/dish-17.jpg"
  },
  {
    "name": "Vegetable Momo",
    "price": "$14.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": "images/dish-18.jpg"
  },
  {
    "name": "Bhuteko Kauli",
    "price": "$17.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": "images/dish-19.jpg"
  },
  {
    "name": "Chana Aloo Saag",
    "price": "$17.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": null
  },
  {
    "name": "Chicken Chow Chow",
    "price": "$16.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": "images/dish-21.jpg"
  },
  {
    "name": "Chicken Chilli",
    "price": "$18.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": "images/dish-22.jpg"
  },
  {
    "name": "Gobi Saag",
    "price": "$17.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": null
  },
  {
    "name": "Mt. Everest Aloo Saag",
    "price": "$17.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": null
  },
  {
    "name": "Mt. Everest Chana Aloo Saag",
    "price": "$17.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": "images/dish-25.jpg"
  },
  {
    "name": "Mt. Everest Chicken Saag",
    "price": "$17.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": "images/dish-26.jpg"
  },
  {
    "name": "Mt. Everest Lamb Saag",
    "price": "$19.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": null
  },
  {
    "name": "Mt. Everest Momo (10pc)",
    "price": "$15.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": "images/dish-28.jpg"
  },
  {
    "name": "Mt. Everest Shrimp Saag",
    "price": "$19.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": null
  },
  {
    "name": "Vegetable Chow Chow",
    "price": "$14.99",
    "category": "Mt. Everest chef's Special Dishes",
    "image": "images/dish-30.jpg"
  },
  {
    "name": "Chicken Junelly",
    "price": "$19.99",
    "category": "Mt. everest Famous Dishes",
    "image": null
  },
  {
    "name": "Himali Junelly",
    "price": "$19.99",
    "category": "Mt. everest Famous Dishes",
    "image": null
  },
  {
    "name": "Goat Curry (Bone-In)",
    "price": "$20.99",
    "category": "Mt. everest Famous Dishes",
    "image": null
  },
  {
    "name": "Lamb Junelly",
    "price": "$20.99",
    "category": "Mt. everest Famous Dishes",
    "image": null
  },
  {
    "name": "Shrimp Junelly",
    "price": "$20.99",
    "category": "Mt. everest Famous Dishes",
    "image": null
  },
  {
    "name": "Aloo Gobi Masala",
    "price": "$16.99",
    "category": "Vegetarian Dishes",
    "image": null
  },
  {
    "name": "Bhindi Masala",
    "price": "$17.99",
    "category": "Vegetarian Dishes",
    "image": null
  },
  {
    "name": "Chana Masala",
    "price": "$16.99",
    "category": "Vegetarian Dishes",
    "image": "images/dish-38.jpg"
  },
  {
    "name": "Dal Makhani",
    "price": "$16.99",
    "category": "Vegetarian Dishes",
    "image": null
  },
  {
    "name": "Mattar Paneer",
    "price": "$17.99",
    "category": "Vegetarian Dishes",
    "image": null
  },
  {
    "name": "Paneer Tikka Masala",
    "price": "$19.99",
    "category": "Vegetarian Dishes",
    "image": null
  },
  {
    "name": "Saag Paneer",
    "price": "$18.99",
    "category": "Vegetarian Dishes",
    "image": "images/dish-42.png"
  },
  {
    "name": "Vegetable Jalfrezi",
    "price": "$17.99",
    "category": "Vegetarian Dishes",
    "image": "images/dish-43.png"
  },
  {
    "name": "Vegetable Korma",
    "price": "$18.99",
    "category": "Vegetarian Dishes",
    "image": null
  },
  {
    "name": "Yellow Dal Fry",
    "price": "$17.99",
    "category": "Vegetarian Dishes",
    "image": null
  },
  {
    "name": "Chicken Curry",
    "price": "$17.99",
    "category": "Chicken Entrees",
    "image": null
  },
  {
    "name": "Chicken Jalfrezi",
    "price": "$17.99",
    "category": "Chicken Entrees",
    "image": null
  },
  {
    "name": "Chicken Kadhai",
    "price": "$17.99",
    "category": "Chicken Entrees",
    "image": null
  },
  {
    "name": "Chicken Korma",
    "price": "$19.99",
    "category": "Chicken Entrees",
    "image": null
  },
  {
    "name": "Chicken Saag",
    "price": "$19.99",
    "category": "Chicken Entrees",
    "image": null
  },
  {
    "name": "Chicken Tikka Masala",
    "price": "$20.99",
    "category": "Chicken Entrees",
    "image": "images/dish-51.jpg"
  },
  {
    "name": "Chicken Vindaloo",
    "price": "$19.99",
    "category": "Chicken Entrees",
    "image": "images/dish-52.png"
  },
  {
    "name": "Lamb Curry",
    "price": "$20.99",
    "category": "Lamb Entrees",
    "image": "images/dish-53.png"
  },
  {
    "name": "Lamb Jalfrezi",
    "price": "$20.99",
    "category": "Lamb Entrees",
    "image": "images/dish-54.png"
  },
  {
    "name": "Lamb Kadhai",
    "price": "$20.99",
    "category": "Lamb Entrees",
    "image": null
  },
  {
    "name": "Lamb Korma",
    "price": "$20.99",
    "category": "Lamb Entrees",
    "image": null
  },
  {
    "name": "Lamb Masala",
    "price": "$20.99",
    "category": "Lamb Entrees",
    "image": null
  },
  {
    "name": "Lamb Saag",
    "price": "$20.99",
    "category": "Lamb Entrees",
    "image": "images/dish-58.jpg"
  },
  {
    "name": "Lamb Vindaloo",
    "price": "$20.99",
    "category": "Lamb Entrees",
    "image": "images/dish-59.png"
  },
  {
    "name": "Fish Curry",
    "price": "$20.99",
    "category": "Seafood Entrees",
    "image": null
  },
  {
    "name": "Fish Tikka Masala (Mt. Everest recipe)",
    "price": "$23.99",
    "category": "Seafood Entrees",
    "image": null
  },
  {
    "name": "Shrimp Curry",
    "price": "$21.99",
    "category": "Seafood Entrees",
    "image": null
  },
  {
    "name": "Shrimp Jalfrezi",
    "price": "$21.99",
    "category": "Seafood Entrees",
    "image": null
  },
  {
    "name": "Shrimp Masala",
    "price": "$20.99",
    "category": "Seafood Entrees",
    "image": null
  },
  {
    "name": "Shrimp Saag",
    "price": "$20.99",
    "category": "Seafood Entrees",
    "image": null
  },
  {
    "name": "Shrimp Vindaloo",
    "price": "$20.99",
    "category": "Seafood Entrees",
    "image": "images/dish-66.png"
  },
  {
    "name": "Chicken Seekh Kabob",
    "price": "$20.99",
    "category": "Tandoori Specialities",
    "image": null
  },
  {
    "name": "Chicken Tikka",
    "price": "$20.99",
    "category": "Tandoori Specialities",
    "image": "images/dish-68.jpg"
  },
  {
    "name": "Fish Tikka",
    "price": "$23.99",
    "category": "Tandoori Specialities",
    "image": "images/dish-69.png"
  },
  {
    "name": "Lamb Seekh Kabob",
    "price": "$21.99",
    "category": "Tandoori Specialities",
    "image": "images/dish-70.png"
  },
  {
    "name": "Tandoori Tiger Prawns",
    "price": "$22.99",
    "category": "Tandoori Specialities",
    "image": "images/dish-71.png"
  },
  {
    "name": "Chicken Biryani",
    "price": "$19.99",
    "category": "Biryani Specialities (Choose One)",
    "image": "images/dish-72.jpg"
  },
  {
    "name": "Goat Biryani",
    "price": "$20.99",
    "category": "Biryani Specialities (Choose One)",
    "image": null
  },
  {
    "name": "Lamb Biryani",
    "price": "$22.99",
    "category": "Biryani Specialities (Choose One)",
    "image": "images/dish-74.png"
  },
  {
    "name": "Shrimp Biryani",
    "price": "$21.99",
    "category": "Biryani Specialities (Choose One)",
    "image": null
  },
  {
    "name": "Steamed Basmati Rice",
    "price": "$5.99",
    "category": "Biryani Specialities (Choose One)",
    "image": null
  },
  {
    "name": "Vegetable Biryani",
    "price": "$18.99",
    "category": "Biryani Specialities (Choose One)",
    "image": null
  },
  {
    "name": "Aloo Paratha",
    "price": "$4.99",
    "category": "Naan Bread",
    "image": null
  },
  {
    "name": "roti",
    "price": "$4.50",
    "category": "Naan Bread",
    "image": null
  },
  {
    "name": "Garlic Naan",
    "price": "$5.99",
    "category": "Naan Bread",
    "image": "images/dish-80.jpg"
  },
  {
    "name": "Kashmiri Naan",
    "price": "$6.99",
    "category": "Naan Bread",
    "image": null
  },
  {
    "name": "Naan",
    "price": "$4.50",
    "category": "Naan Bread",
    "image": null
  },
  {
    "name": "Naan Basket",
    "price": "$13.99",
    "category": "Naan Bread",
    "image": null
  },
  {
    "name": "Onion Kulcha",
    "price": "$4.99",
    "category": "Naan Bread",
    "image": "images/dish-84.png"
  },
  {
    "name": "Paneer Kulcha",
    "price": "$5.99",
    "category": "Naan Bread",
    "image": null
  },
  {
    "name": "Extra Rice",
    "price": "$4.99",
    "category": "Accompaniments",
    "image": null
  },
  {
    "name": "Raita",
    "price": "$4.99",
    "category": "Accompaniments",
    "image": null
  },
  {
    "name": "Tikka Sauce",
    "price": "$5.99",
    "category": "Accompaniments",
    "image": null
  },
  {
    "name": "Chicken Tenders",
    "price": "$7.99",
    "category": "Kids Menu",
    "image": null
  },
  {
    "name": "French Fries",
    "price": "$4.99",
    "category": "Kids Menu",
    "image": null
  },
  {
    "name": "Kids Chicken Tikka",
    "price": "$12.99",
    "category": "Kids Menu",
    "image": "images/dish-91.png"
  },
  {
    "name": "Chocolate Cake",
    "price": "$5.99",
    "category": "Desserts",
    "image": null
  },
  {
    "name": "Gulab Jamun",
    "price": "$6.99",
    "category": "Desserts",
    "image": null
  },
  {
    "name": "Kheer",
    "price": "$5.99",
    "category": "Desserts",
    "image": null
  },
  {
    "name": "Mango Lassi",
    "price": "$5.50",
    "category": "Beverages",
    "image": null
  },
  {
    "name": "Soft Drinks",
    "price": "$3.50",
    "category": "Beverages",
    "image": null
  }
];
