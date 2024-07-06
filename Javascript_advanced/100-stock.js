// Create a variable named stock
var stock = {
    macbook: 2,
    iphone: 4
};

// Write a new function named processPayment
function processPayment(itemName) {
    // Change the stock, by removing one item of the stock for the item passed in argument
    stock[itemName]--;
    // Log to the console the text Payment is being processed for item <itemName>
    console.log(`Payment is being processed for item ${itemName}`);
}

// Write a new function named processError
function processError(itemName) {
    // Log to the console the text No more <itemName> in stock
    console.log(`No more ${itemName} in stock`);
    // Log to the console the text Payment is not being processed
    console.log('Payment is not being processed');
}

// Write a new function named processOrder
function processOrder(itemName, callbackPayment, callbackError) {
    // Log to the console the text Verifying the stock of <itemName>
    console.log(`Verifying the stock of ${itemName}`);
    
    // Check if there is enough stock for the item
    if (stock[itemName] > 0) {
        // If there is enough stock, call callbackPayment
        callbackPayment(itemName);
    } else {
        // If there is not enough stock, call callbackError
        callbackError(itemName);
    }
}

// Prompt to the user the message Please enter the item you would like to purchase (Macbook, iPhone) and pass the right callbacks
var item = prompt("Please enter the item you would like to purchase (Macbook, iPhone)").toLowerCase();

if (stock.hasOwnProperty(item)) {
    processOrder(item, processPayment, processError);
} else {
    console.log('Item not found in stock');
}
