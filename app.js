const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//initialize express
const app = express();

//initialize middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//connect MongoDB
const db = 'mongodb://localhost/node-template';
mongoose.connect(db);


//Require model
var Inventory  = require('./model/inventory').model;


var createInventory = function(title, description, img, price, category){
  var inventory = Inventory({
    title : title,
    description : description,
    img : img,
    price : price,
    category : category
  });
  inventory.save(function(err){
    if(err) {
      console.log(err);
      return;
    };
    console.log('food created');
  });
};


//Pastries
createInventory("Croissant", "blah blah blah blah blah", "img", "5", "Pastries");
createInventory("Cinammon Roll", "blah blah blah blah blah", "img", "5", "Pastries");
createInventory("Fruit Tart", "blah blah blah blah blah", "img", "5", "Pastries");
createInventory("ChocolateCroissant", "blah blah blah blah blah", "img", "5", "Pastries");
createInventory("Peach Danish", "blah blah blah blah blah", "img", "5", "Pastries");
createInventory("Blueberry Muffin", "blah blah blah blah blah", "img", "5", "Pastries");

//Salad
createInventory("Big Salad", "blah blah blah blah blah", "img", "5", "Salad");
createInventory("Small Salad", "blah blah blah blah blah", "img", "10", "Salad");

//Sandwiches
createInventory("Salami Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");
createInventory("Parma Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");
createInventory("Egg & Ham Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");
createInventory("Ham & Brie Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");
createInventory("Tomato Mozza Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");
createInventory("Portobello Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");

//Soup
createInventory("Pumpkin Soup", "blah blah blah blah blah", "img", "15", "Soup");
createInventory("Mushroom Soup", "blah blah blah blah blah", "img", "15", "Soup");
createInventory("Veggie Soup", "blah blah blah blah blah", "img", "15", "Soup");

//Snacks
createInventory("Fruit Cup", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Kettle Chips, BBQ Flavour", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Kettle Chips, Cheddar Flavour", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Oat Bar", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Apple", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Bananna", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("70% Chocolate", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Coffee Flavoured Chocolate", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Chilli Nut Trail", "blah blah blah blah blah", "img", "15", "Snacks");

//Beverages
createInventory("Cappucino", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Latte", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Flat White", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Americano", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Espresso", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Berry Smoothie", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Greenie Smoothie", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Orange Juice", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Grapefruit Juice", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Apple Juice", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Sparkling Water", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Water", "blah blah blah blah blah", "img", "15", "Beverages");