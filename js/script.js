// Copyright (c) 2023 Sirine Cherkaoui All rights reserved
//
// Created by Sirine Cherkaoui
// Created on April 2023
// This file contains the JS functions for index.html
"use strict";

// Code that enables users to disables the topping checkboxes once they confirm they would like a beaver tail
function toggleToppings() {
    let doughType = document.getElementById("dough-type").value;

    if (doughType !== "0") {
        document.getElementById("nutella").disabled = false;
        document.getElementById("icing").disabled = false;
        document.getElementById("almonds").disabled = false;
        document.getElementById("strawberry-syrup").disabled = false;
        document.getElementById("maple-syrup").disabled = false;
    } else {
        document.getElementById("nutella").disabled = true;
        document.getElementById("icing").disabled = true;
        document.getElementById("almonds").disabled = true;
        document.getElementById("strawberry-syrup").disabled = true;
        document.getElementById("maple-syrup").disabled = true;
    }
}

function OrderGiven() {

    // Constant for taxes, toppings price, coffee price, and Lollipops price 
    const HST = 0.13;
    const PRICE_TOPPINGS = 0.75;
    const PRICE_LOLLIPOPS = 2.00;
    const PRICE_COFFEES = 3.00;

    // Variable for base cost
    let baseCost = 0;

    // User input for dough type, dough size, number of lollipops and number of coffees
    let doughType = document.getElementById("dough-type").value;
    let beaverSize = document.getElementById("beaver-tail-size").value;
    let numLollipops = parseInt(document.getElementById("maple-syrup-lollipops").value);
    let numCoffees = parseInt(document.getElementById("coffees").value);

    // Determining the number of toppings selected based on number of checkboxes checked
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // Value to declare variable for number of toppings chosen
    let numToppings = checkboxes.length;

    // Cost of the toppings using number of toppings variable and cost of toppings constant
    let costToppings = numToppings * PRICE_TOPPINGS;

    // Compound statements for different purchase outcomes

    // If the dough type is plain and the size is small
    if ((doughType == "plain") && (beaverSize == "small")) {
        baseCost = 3.99;
    }

    // If the dough type is chocolate and the size is small
    else if ((doughType == "chocolate") && (beaverSize == "small")) {
        baseCost = 4.99;
    }

    // If the dough type is plain and the size is medium
    else if ((doughType == "plain") && (beaverSize == "medium")) {
        baseCost = 4.99;
    }

    // If the dough type is chocolate and the size is medium
    else if ((doughType == "chocolate") && (beaverSize == "medium")) {
        baseCost = 5.99;
    }

    // If the dough type is plain and the size is large
    else if ((doughType == "plain") && (beaverSize == "large")) {
        baseCost = 5.99;
    }

    // If the dough type is chocolate and the size is large
    else if ((doughType == "chocolate") && (beaverSize == "large")) {
        baseCost = 6.99;
    } else {
        baseCost = 0.00;
    }

    // Determining the cost of the sides using number of sides variables and prices of sides constants
    let costLollipops = numLollipops * PRICE_LOLLIPOPS;
    let costCoffees = numCoffees * PRICE_COFFEES;

    // Calculating the subtotal, tax and total
    let subtotal = baseCost + costToppings + costLollipops + costCoffees;
    let taxes = subtotal * HST;
    let total = subtotal + taxes;

    // Displaying the total to the user in the "results" div
    document.getElementById("order").innerHTML = "You ordered a " + beaverSize + " and " + doughType + " beaver tail. You also picked " + numToppings + " topping(s) on your beaver tail, as well as " + numLollipops + " maple syrup lollipop(s) and " + numCoffees + " coffee(s). Therefore, your subtotal is $" + subtotal.toFixed(2) + ". The amount of taxes you will pay is 13% of your order or $" + taxes.toFixed(2) + ". Hence, your total is $" + total.toFixed(2) + ". Thank you for ordering with Beaver Tail Rail and see you next time!";

}