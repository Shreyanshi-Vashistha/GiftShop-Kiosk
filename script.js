// function to ask user for the gift quantity and check for numeric value
const checkValue = () => {
  let qty = prompt("Enter Gifts quantity");
  while (isNaN(qty)) {
    qty = prompt("Please enter a numeric value");
  }
  return parseInt(qty);
};

// function to add gift item to the cart
const addGift = (giftName, price) => {
  quantity = checkValue();
  calculate(giftName, quantity, price);
};

let tot = 0;
let cart = 0;
// function to calculate subtotal, show total items in the cart
const calculate = (name, qty, price) => {
  cart = cart + qty;

  let rows = "";
  let subtotal = qty * price;

  rows += `<td> ${name}  </td>
  <td> ${qty}  </td>
  <td> ${price}  </td>
  <td> ${subtotal}  </td>`;

  document.getElementById("receiptTable").innerHTML += rows;
  document.getElementById("cartValue").innerHTML = cart;

  tot = tot + subtotal;
};

// function to show the receipt on checkout
const checkout = () => {
  // display receipt table when button is clicked
  if (document.getElementById("finalTable").style.display === "none") {
    document.getElementById("finalTable").style.display = "block";
  }

  // ask the user for the name and check that the input is not empty
  let name = prompt("Enter the name you want on your gift");
  if (name === "") {
    checkout();
  }

  // add name in the receipt table
  document.getElementById("toName").innerHTML += name;

  /*check if the total amount is less than $50, add $10 as shipping charges
  otherwise show “Free Shipping” on the receipt*/
  if (tot < 50) {
    tot = tot + 10;
    document.getElementById("shipping").innerHTML = 10;
    document.getElementById("shipping").style.color = "red";
  } else {
    document.getElementById("shipping").innerHTML = "Free";
    document.getElementById("shipping").style.color = "green";
  }

  // GST calculations on total cost and display on receipt
  gst = (13 * tot) / 100;
  document.getElementById("gst").innerHTML = gst;
  document.getElementById("gst").style.color = "red";
  tot = tot + gst;
  document.getElementById("final").innerHTML = tot + "$";
};
